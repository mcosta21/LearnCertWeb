import { CreateCertification } from './../domain/certification.commands';
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
  const cmd = new CreateCertification(certification);
  await api.post(`${root}/Save`, cmd);
}