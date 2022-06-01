import { LanguageType } from './../../CertificationPage/models/certification.model';

export class Certification {
    public id: string;
    public title: string;
    public imageUrl: string;
    public modules: Array<Module> = [];
}

export class Module {
    public id: string;
    public title: string;
    public code: number;
    public questions: Array<Question> = [];

    constructor(){}
}

export class Question {
    public id: string;
    public code: number;
    public questionDescriptions: Array<QuestionDescription> = [];
}

export class QuestionDescription {
    public id: string;
    public description: string;
    public languageType: LanguageType;
    public answerOptions: Array<AnswerOption> = [];
}

export class AnswerOption {
    public id: string;
    public description: string;
    public code: number;
    public isCorrect: boolean;
}