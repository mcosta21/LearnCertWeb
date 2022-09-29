import { Certification, QuestionModelCard } from './../../CertificationFormPage/domain/certification.model';
import { api } from "@config/api";
import { RegisterQuizCommand } from '../domain/commands/quiz.commands';

const root = '/Quiz';

export async function register(certification: Certification, questions: QuestionModelCard[]){
  const cmd = new RegisterQuizCommand(certification, questions);
  await api.post(`${root}/Register`, cmd);
}
