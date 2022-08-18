import { LanguageType } from "@pages/CertificationFormPage/domain/certification.model";

export class CertificationModel {
    id: string;
    title: string;
    questionDescriptions: QuestionDescriptionModel[];
}

export interface QuestionDescriptionModel {
    id: string;
    code: string;
    description: string;
    languageType: LanguageType;
    certificationId: string;
    moduleTitle: string;
    questionId: string;
    answerOptions: AnswerOption[];
}

export interface AnswerOption {
    id: string;
    code: number;
    description: string;
    isCorrect: boolean;
}


export interface QuestionResult {
    id: string;
    moduleTitle: string;
    questionDescription: string;
    questionId: string;
    answerOptions: AnswerOption[];
    externalLink?: string;
    numberModule: number;
    numberQuestion: number;
}
