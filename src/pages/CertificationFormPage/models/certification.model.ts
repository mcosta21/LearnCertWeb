import { LanguageType } from './../../CertificationPage/models/certification.model';
import { v4 as uuid } from 'uuid';

export class Certification {
    public id: string;
    public title: string;
    public imageUrl: string;
    public languageType: LanguageType;
    public modules: Array<Module> = [];
}

export class Module {
    public id: string = uuid();
    public title: string;
    public code: number;
    public questions: Array<Question> = [];

    constructor(title: string) {
        this.title = title;
    }
}

export class Question {
    public id: string = uuid();
    public code: number;
    public description: string;
    public answerOptions: Array<AnswerOption> = [];

    constructor(description: string) {
        this.description = description;
    }
}

export class AnswerOption {
    public id: string;
    public description: string;
    public code: number;
    public isCorrect: boolean;
}