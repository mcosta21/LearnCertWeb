import LBody from "../../components/LBody";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { LInput } from "../../components/LInput";
import { Certification, Module } from "./models/certification.model";
import { yupResolver } from '@hookform/resolvers/yup';
import { CertificationValidation } from "./models/certification.validation";
import ModuleField from "./components/ModuleField";

interface Props {

}

export default function CertificationFormPage({

}: Props){

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        control,
        getValues,
        setValue
    } = useForm<Certification>({ resolver: yupResolver(CertificationValidation) });

    const { fields, append, prepend } = useFieldArray({
        control,
        name: "modules"
      });

    function handleAddModule(){
        const modules = getValues('modules') ?? [];
        const module = new Module();
        module.title = "teste"
        setValue('modules', [...modules, module])
    }

    const onSubmit: SubmitHandler<Certification> = async data => {
        console.log(data)
    };

    return (
        <LBody>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <img src={getValues().imageUrl} height="140"/>
                    <h4>{getValues().title}</h4>
                </div>
                <LInput 
                    label="CERTIFICATION.TITLE"
                    error={errors.title?.message}
                    {...register("title")} 
                />

                <LInput 
                    label="CERTIFICATION.IMAGE_URL"
                    error={errors.imageUrl?.message}
                    {...register("imageUrl")} 
                />
                
                <hr />

                <button onClick={() => handleAddModule()}>
                    Add module
                </button>

                {
                    fields.map((field, index) => (
                        <ModuleField key={field.id} {...{ control, index, errors: errors.modules ? errors.modules[index] : undefined }} />
                    ))
                }
                
                <br/>
                <input type="submit" />
            </form>
        </LBody>
    )
}