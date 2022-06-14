import { api } from "@config/api";
import { CertificationModel } from "../models/certification.model";

const root = '/certification';

export async function getCertification(id: string): Promise<CertificationModel> {
  const response = await api.get<CertificationModel>(`${root}/Show/${id}`);
  return response.data;
}
