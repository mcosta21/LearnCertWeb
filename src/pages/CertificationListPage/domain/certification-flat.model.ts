import { LanguageType } from './../../CertificationPage/models/certification.model';

export interface CertificationFlat {
    id: string;
    title: string;
    languageType: LanguageType;
    countQuestions: number;
}