import { LanguageType } from './../../CertificationPage/models/certification.model';

export class Certification {
    public id: string;
    public title: string;
    public imageUrl: string;
    public languageType: LanguageType;
    public modules: Array<Module> = [];
}

export class Module {
    public id: string;
    public title: string;
    public code: number;
    public questions: Array<Question> = [];

    constructor(title: string, code: number) {
        this.title = title;
        this.code = code;
    }
}

export class Question {
    public id: string;
    public code: number;
    public description: string;
    public learnMore: string;
    public answerOptions: Array<AnswerOption> = [];
}

export class AnswerOption {
    public id: string;
    public description: string = '';
    public code: number;
    public isCorrect: boolean = false;
}
/*
export const certification = new Certification();
certification.id = uuid();
certification.title = "AZ 900";

const module = new Module("Módulo 2", 1);
module.id = uuid();
const question1 = new Question();
question1.description = "Questão 1";
question1.code = 1;

const answer1 = new AnswerOption();
answer1.code = 1;
answer1.description = "Reposta 1";
answer1.isCorrect = true;
question1.answerOptions.push(answer1);

module.questions.push(question1)
certification.modules.push(module);
*/