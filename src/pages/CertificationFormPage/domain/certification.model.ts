import { LanguageType } from '../../CertificationPage/models/certification.model';
import { v4 as uuid } from 'uuid';

export class Certification {
    public id: string = uuid();
    public title: string;
    public imageUrl: string;
    public languageType: LanguageType = LanguageType.English;
    public modules: Array<Module> = [];
}

export class Module {
    public id: string = uuid();
    public title: string;
    public code: number;
    public questions: Array<Question> = [];

    constructor(title: string, code: number) {
        this.title = title;
        this.code = code;
    }
}

export class Question {
    public id: string = uuid();
    public code: number;
    public description: string;
    public learnMore: string;
    public answerOptions: Array<AnswerOption> = [];

    public collapsed: boolean = true;
}

export class AnswerOption {
    public id: string = uuid();
    public description: string = '';
    public code: number;
    public isCorrect: boolean = false;
}