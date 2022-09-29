import { v4 as uuid } from 'uuid';

export enum LanguageType {
    English = 'English',
    Portuguese = 'Portuguese'
}

export const LanguageTypes = Object.keys(LanguageType) as LanguageType[];

export interface LanguageTypeOption {
    languageType: LanguageType | 'All';
    image: string;
}

export const LanguageTypeOptions = [
    {
        languageType: 'All',
        image: '/images/flags/all_flag.png',
    },
    {
        languageType: LanguageType.Portuguese,
        image: '/images/flags/brasil_flag.png',
    },
    {
        languageType: LanguageType.English,
        image: '/images/flags/usa_flag.png',
    }
] as LanguageTypeOption[];

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

export class QuestionModelCard extends Question {
    public answerSelected: AnswerOption;
    public moduleTitle: string;
    public moduleCode: number;
}