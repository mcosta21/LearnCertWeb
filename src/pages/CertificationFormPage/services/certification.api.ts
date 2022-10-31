import { CertificationHelper } from '@pages/CertificationPage/services/certification.helper';
import { CreateCertificationCommand, UpdateCertificationCommand } from './../domain/certification.commands';
import { Certification } from '@pages/CertificationFormPage/domain/certification.model';
import { api } from '@config/api';

const root = '/Certification';

const config = {
  headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
  }
} 

export async function getById(
    id: string,
    decryptAnswerOption: boolean = false
  ): Promise<Certification> {
    const response = await api.get(`${root}/Show/${id}`, config);

    if(decryptAnswerOption) {
      const certification = response.data as Certification;
      return await CertificationHelper.parse(certification);
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
