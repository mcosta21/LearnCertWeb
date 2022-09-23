import { Control, useFieldArray, UseFormSetValue } from "react-hook-form";
import { LDashedButton } from "@components/LDashedButton";
import { Certification, Question } from "../../domain/certification.model";
import { QuestionCard } from "../QuestionCard";
import { SModuleTabContainer, SQuestionContainer } from "./styles";
import Translate from "@services/i18nProvider/Translate";

export interface ModuleTabProps {
    control: Control<Certification, any>,
    index: number;
    setValue: UseFormSetValue<Certification>
}

export function ModuleTab({ control, index, setValue }: ModuleTabProps){

    const { fields, remove, append, update } = useFieldArray({
        control,
        name: `modules.${index}.questions`
    });

    function handleAddQuestion(){
        const question = new Question();
        question.code = fields.length + 1;
        question.collapsed = false;
        append(question);
    }

    function handleRemoveQuestion(index: number) {
        remove(index);
    }

    function handleClearQuestionDescription(questionIndex: number) {
        setValue(`modules.${index}.questions.${questionIndex}.description`, '');
    }

    return (
        <SModuleTabContainer className="module-tab">
            <SQuestionContainer>
                {
                    fields.map((question, questionIndex) => (
                        <QuestionCard
                            key={question.id}
                            control={control}
                            moduleIndex={index}
                            questionIndex={questionIndex}
                            onRemoveQuestion={handleRemoveQuestion}
                            collapsed={question.collapsed}
                            onClearDescription={handleClearQuestionDescription}
                        />
                    ))
                }
            </SQuestionContainer>

            <LDashedButton type="button" onClick={handleAddQuestion}>
                <Translate value="QUESTION.ADD" />
            </LDashedButton>
            
        </SModuleTabContainer>
    )
}