import { LInput } from "../../../../components/LInput";
import { Control, Controller, useFieldArray } from "react-hook-form";
import { Certification, Question } from "../../models/certification.model";
import { SButtonAddQuestion, SModuleTabContainer, SQuestionContainer } from "./styles";
import { QuestionCard } from "../QuestionCard";

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
        const question = new Question('questão 1');
        append(question);
    }

    return (
        <SModuleTabContainer className="module-tab">

            {
                /*
                <Controller
                    control={control}
                    name={`modules.${index}.title`}
                    defaultValue=""
                    render={({ field }) =>
                        (
                            <LInput 
                                label="CERTIFICATION.TITLE"
                                {...field} 
                            />
                        )
                    }
                />
                */
            }

            <SQuestionContainer>
                {
                    fields.map((question, questionIndex) => (
                        <QuestionCard
                            key={questionIndex}
                            control={control}
                            moduleIndex={index}
                            questionIndex={questionIndex}
                        />
                    ))
                }
            </SQuestionContainer>

            <SButtonAddQuestion onClick={handleAddQuestion}>
                ADD_QUESTION
            </SButtonAddQuestion>
            
        </SModuleTabContainer>
    )
}