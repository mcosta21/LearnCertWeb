import { CertificationHelper } from '@pages/CertificationPage/services/certification.helper';
import { CreateCertificationCommand, UpdateCertificationCommand } from './../domain/certification.commands';
import { Certification } from '@pages/CertificationFormPage/domain/certification.model';
import { api } from '@config/api';

const root = '/Certification';

export async function getById(
    id: string,
    decryptAnswerOption: boolean = false
  ): Promise<Certification> {
    const response = await api.get(`${root}/Show/${id}`);

    if(decryptAnswerOption) {
      const certification = response.data as Certification;
      return CertificationHelper.parse(certification);

    }
    return response.data;
}

export async function save(
  certification: Certification
) {
  const cmd = new CreateCertificationCommand(certification);
  await api.post(`${root}/Save`, cmd);
}

export async function update(
  certification: Certification
) {
  const cmd = new UpdateCertificationCommand(certification);
  await api.put(`${root}/Update`, cmd);
}
