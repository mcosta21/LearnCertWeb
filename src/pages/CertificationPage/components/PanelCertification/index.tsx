import _, { first } from "lodash";
import { useState } from "react";
import { 
    AnswerOption,
    CertificationModel, 
    LanguageType, 
    LanguageTypes, 
    QuestionDescriptionModel, 
    QuestionResult 
} from "../../models/certification.model";
import EmptyQuestionCard from "../EmptyQuestionCard";
import QuestionCard from "../QuestionCard";
import { BoxCard, SPanelContainer } from "./styles";

interface Props {
    certification: CertificationModel
}

export default function PanelCertification({
    certification
}: Props){

    
    const [selectedAnswerOptionCode, setSelectedAnswerOptionCode] = useState<number>();

    const firstLanguage = LanguageTypes[0];
    const secondLanguage = LanguageTypes[1];

    const [questionFocused, setQuestionFocused] = useState<string>();
    const [showCorrectAnswer, setShowCorrectAnswer] = useState<string>();

    const groupQuestions = _.groupBy(certification.questionDescriptions, 'questionId');
    const questions = Object.values(_.mapValues(groupQuestions, question => question));


    function handleFocusQuestion(questionId: string | undefined) {
        setSelectedAnswerOptionCode(undefined);
        setQuestionFocused(questionId);
    }

    function handleShowCorrectAnswer(questionId: string | undefined) {
        setShowCorrectAnswer(questionId);
    }
    
    function handleSelectOption(option: AnswerOption) {
        setSelectedAnswerOptionCode(option.code);
    }

    return (
        <SPanelContainer>
            {
                questions.map((question, index) => (
                    <aside key={index}>
                        <QuestionByLanguage 
                            values={question} 
                            languageType={firstLanguage} 
                            questionFocused={questionFocused}
                            showCorrectAnswer={showCorrectAnswer}
                            onFocus={handleFocusQuestion}
                            onShowCorrect={handleShowCorrectAnswer}
                            selectedOptionCode={selectedAnswerOptionCode}
                            onSelectOption={handleSelectOption}
                        />
                        <QuestionByLanguage 
                            values={question} 
                            languageType={secondLanguage} 
                            questionFocused={questionFocused}
                            showCorrectAnswer={showCorrectAnswer}
                            onFocus={handleFocusQuestion}
                            onShowCorrect={handleShowCorrectAnswer}
                            selectedOptionCode={selectedAnswerOptionCode}
                            onSelectOption={handleSelectOption}
                        />
                    </aside>
                ))
            }
        </SPanelContainer>
    )
}

interface QuestionByLanguageProps {
    values: QuestionDescriptionModel[], 
    languageType: LanguageType,
    questionFocused: string | undefined;
    showCorrectAnswer: string | undefined;
    onFocus: (questionId: string | undefined) => void;
    onShowCorrect: (questionId: string | undefined) => void;
    selectedOptionCode: number | undefined;
    onSelectOption: (option: AnswerOption) => void;
}

function QuestionByLanguage({
    values,
    languageType,
    questionFocused,
    showCorrectAnswer,
    onFocus,
    onShowCorrect,
    selectedOptionCode,
    onSelectOption
}: QuestionByLanguageProps) {
    const question = values.find(x => x.languageType === languageType);
    return (
        <BoxCard>
            {
                question ? (
                    <QuestionCard 
                        key={question.id} 
                        value={question} 
                        focused={question.questionId === questionFocused}
                        showCorrect={question.questionId === showCorrectAnswer}
                        onFocus={onFocus}
                        onShowCorrect={onShowCorrect}
                        selectedOptionCode={selectedOptionCode}
                        onSelectOption={onSelectOption}
                    />  
                ) : (
                    <EmptyQuestionCard />
                )
            }
        </BoxCard>
    )
}