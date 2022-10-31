import { AnswerOption, LanguageType, Question } from "@pages/CertificationFormPage/domain/certification.model";
import { CertificationHelper } from '@pages/CertificationPage/services/certification.helper';

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

export class QuestionModelCard extends Question {
    public answerSelected: AnswerOption;
    public moduleTitle: string;
    public moduleCode: number;
    public index: number;

    constructor(question: Question, moduleCode: number, moduleTitle: string, index: number) {
        super();

        this.id = question.id;
        this.code = question.code;
        this.description = question.description;
        this.learnMore = question.learnMore;
        this.answerOptions = question.answerOptions.map(x => ({ ...x, isCorrect: CertificationHelper.parseBoolean(x.value)}));
        this.collapsed = true;
        this.moduleCode = moduleCode,
        this.moduleTitle = moduleTitle,
        this.index = index;
    }
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

