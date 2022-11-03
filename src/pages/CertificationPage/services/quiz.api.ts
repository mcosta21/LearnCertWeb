import { Certification } from './../../CertificationFormPage/domain/certification.model';
import { api } from "@config/api";
import { RegisterQuizCommand } from '../domain/commands/quiz.commands';
import { QuestionModelCard } from '../domain/models/certification.model';

const root = '/Quiz';

export async function register(certification: Certification, questions: QuestionModelCard[]){
  const cmd = new RegisterQuizCommand(certification, questions);
  await api.post(`${root}/Register`, cmd);
}
