import { QuizResponseValue } from '../models/quiz.model';
import { Certification, QuestionModelCard } from './../../../CertificationFormPage/domain/certification.model';
import { v4 as uuid } from 'uuid';

export class RegisterQuizCommand {
    public id: string;
    public certificationId: string;
    public responses: QuizResponseValue[] = [];

    constructor(certification: Certification, questions: QuestionModelCard[]){
        this.id = uuid();
        this.certificationId = certification.id;
        this.responses = questions.map(x => ({
            id: uuid(),
            questionId: x.id,
            answerOptionId: x.answerSelected.id
        }));
    }
}