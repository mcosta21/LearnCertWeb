import { LanguageType } from "@pages/CertificationFormPage/domain/certification.model";

export interface CertificationFlat {
    id: string;
    title: string;
    imageUrl: string;
    languageType: LanguageType;
    countQuestions: number;
    quizCounter: number;
    creator: string;
    creatorId: string;
    creatorAvatar: string;
}