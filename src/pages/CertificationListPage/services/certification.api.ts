import { CertificationFlat } from './../domain/certification-flat.model';
import { api } from '@config/api';

const root = '/Certification';

export async function index(): Promise<CertificationFlat[]> {
    const response = await api.get(`${root}/Index`);
    return response.data;
}

export async function remove(id: string) {
    await api.delete(`${root}/Delete/${id}`);
  }