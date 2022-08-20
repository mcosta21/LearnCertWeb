import { LanguageType } from '@pages/CertificationPage/models/certification.model';

export interface CertificationFlat {
    id: string;
    title: string;
    imgFileName: string;
    imgAlt: string;
    languageType: LanguageType;
    countQuestions: number;
}