import { Module, Question } from "@pages/CertificationFormPage/domain/certification.model";
import { AnswerOption, QuestionDescriptionModel } from "@pages/CertificationPage/models/certification.model";
import AnswerOptionList from "./AnswerOptionList";
import QuestionModuleTitle from "./QuestionModuleTitle";
import { SCardContainer, SQuestionDescription, SQuestionFooter } from "./styles";

interface Props {
    question: Question;
    module: Module;
    focused: boolean;
    showCorrect: boolean;
    onFocus: (questionId: string | undefined) => void;
    onShowCorrect: (questionId: string | undefined) => void;
    selectedOptionCode: number | undefined;
    onSelectOption: (option: AnswerOption) => void;
}

export default function QuestionCard({
    question,
    module,
    focused,
    onFocus,
    showCorrect,
    onShowCorrect,
    selectedOptionCode,
    onSelectOption
}: Props){

    
    function handleFocus() {
        if(focused) return;
        onFocus(question.id);
    }

    function handleCollapse() {
        onFocus(undefined);
    }

    function handleShowCorrectAnswer() {
        onShowCorrect(showCorrect ? undefined : question.id);
    }


    return (
        <SCardContainer onClick={handleFocus} className={focused ? 'focused' : 'collapsed'}>
            <QuestionModuleTitle 
                module={module}
                question={question}
                focused={focused}
                handleCollapse={handleCollapse}
            />

            <SQuestionDescription>
                {question.description}
            </SQuestionDescription>

            {
                focused && (
                    <>
                        <AnswerOptionList 
                            answers={question.answerOptions} 
                            showCorrect={showCorrect} 
                            selectedOptionCode={selectedOptionCode}
                            onSelectOption={onSelectOption}
                        />
                        <SQuestionFooter>
                            <a 
                                href={question.description} 
                                rel="noreferrer noopener"
                                target="_blank"
                                className={!!question.description ? 'visible' : 'hidden'}
                            >
                                Learn more
                            </a>
                            <button onClick={handleShowCorrectAnswer}>
                                {showCorrect ? 'Hide answer' : 'Show answer'}
                            </button>
                        </SQuestionFooter>
                    </>
                )
            }
            
        </SCardContainer>
    )
}
