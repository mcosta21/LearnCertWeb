import { AnswerOption, Certification, LanguageType, LanguageTypes, Question } from "@pages/CertificationFormPage/domain/certification.model";
import _ from "lodash";
import { useState } from "react";
import EmptyQuestionCard from "../EmptyQuestionCard";
import QuestionCard from "../QuestionCard";
import { BoxCard, SPanelContainer } from "./styles";

interface Props {
    certification: Certification,
    showAllAnswer: boolean;
}

export default function PanelCertification({
    certification,
    showAllAnswer
}: Props){

    
    const [selectedAnswerOptionCode, setSelectedAnswerOptionCode] = useState<number>();

    const [questionFocused, setQuestionFocused] = useState<string>();
    const [showCorrectAnswer, setShowCorrectAnswer] = useState<string>();

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
                certification.modules.map(module => (
                    module.questions.map((question, index) => (
                        <aside key={index}>
                            <QuestionCard 
                                key={question.id} 
                                question={question} 
                                module={module}
                                focused={question.id === questionFocused}
                                showCorrect={question.id === showCorrectAnswer || showAllAnswer === true}
                                onFocus={handleFocusQuestion}
                                onShowCorrect={handleShowCorrectAnswer}
                                selectedOptionCode={selectedAnswerOptionCode}
                                onSelectOption={handleSelectOption}
                            />
                        </aside>
                    ))     
                ))
                
            }
        </SPanelContainer>
    )
}

interface QuestionByLanguageProps {
    values: Question[], 
    languageType: LanguageType,
    questionFocused: string | undefined;
    showCorrectAnswer: string | undefined;
    onFocus: (questionId: string | undefined) => void;
    onShowCorrect: (questionId: string | undefined) => void;
    selectedOptionCode: number | undefined;
    onSelectOption: (option: AnswerOption) => void;
}

/*
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
*/