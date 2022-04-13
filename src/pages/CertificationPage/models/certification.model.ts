export interface Certification {
    id: string;
    title: string;
    modules: Module[];
}

export interface Module {
    id: string;
    title: string;
    orderExibition: number;
    questions: Question[];
}

export interface Question {
    id: string;
    code: number;
    questionDescriptions: QuestionDescription[];
}

export interface QuestionDescription {
    id: string;
    description: string;
    languageType: LanguageType;
    answerOptions: AnswerOption[];
}

export interface AnswerOption {
    id: string;
    description: string;
    isCorrect: boolean;
}

export enum LanguageType {
    English = "English",
    Portuguese = "Portuguese"
}


export interface QuestionResult {
    id: string;
    moduleTitle: string;
    questionDescription: string;
    answerOptions: AnswerOption[];
}