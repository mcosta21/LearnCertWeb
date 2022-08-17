import { CreateCertificationCommand, UpdateCertificationCommand } from './../domain/certification.commands';
import { Certification } from '@pages/CertificationFormPage/domain/certification.model';
import { api } from '@config/api';

const root = '/Certification';

export async function getById(
    id: string,
  ): Promise<Certification> {
    const response = await api.get(`${root}/Show/${id}`);
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