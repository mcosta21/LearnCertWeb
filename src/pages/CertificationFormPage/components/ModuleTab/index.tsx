import { Control, useFieldArray } from "react-hook-form";
import { LDashedButton } from "@components/LDashedButton";
import { Certification, Question } from "../../domain/certification.model";
import { QuestionCard } from "../QuestionCard";
import { SModuleTabContainer, SQuestionContainer } from "./styles";

export interface ModuleTabProps {
    control: Control<Certification, any>,
    index: number;
}
export function ModuleTab({ control, index }: ModuleTabProps){

    const { fields, remove, append } = useFieldArray({
        control,
        name: `modules.${index}.questions`
    });

    function handleAddQuestion(){
        const question = new Question();
        question.code = fields.length + 1;
        append(question);
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
                        />
                    ))
                }
            </SQuestionContainer>

            <LDashedButton type="button" onClick={handleAddQuestion}>
                ADD_QUESTION
            </LDashedButton>
            
        </SModuleTabContainer>
    )
}