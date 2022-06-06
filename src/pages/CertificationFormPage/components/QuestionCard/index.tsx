import { LInput } from "../../../../components/LInput";
import { Certification } from "pages/CertificationFormPage/models/certification.model";
import { Control, Controller } from "react-hook-form";

interface Props {
    moduleIndex: number;
    questionIndex: number;
    control: Control<Certification, any>,
}

export function QuestionCard({
    moduleIndex,
    questionIndex,
    control,
}: Props){
    return (
        <Controller
            control={control}
            name={`modules.${moduleIndex}.questions.${questionIndex}.description`}
            render={({ field }) =>
                (
                    <LInput 
                        label="QUESTION.DESCRIPTION"
                        {...field} 
                    />
                )
            }
        />
    )
}