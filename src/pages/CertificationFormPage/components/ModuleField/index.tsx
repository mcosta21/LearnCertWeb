import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import { Certification, Module } from "pages/CertificationFormPage/models/certification.model";
import { LanguageTypes } from '../../../CertificationPage/models/certification.model';
import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { LInput } from "../../../../components/LInput";
import { SAccordion } from "./styles";

interface Props {
    index: number, 
    errors?: FieldErrors<Module>;
    control: Control<Certification, any>,
}

export default function ModuleField({
    index,
    errors,
    control
}: Props){
    
    const [expand, setExpand] = useState(true);
    const toggleAcordion = () => {
        setExpand((prev) => !prev);
    };
    
    return (
        <Controller
            control={control}
            name={`modules.${index}.title`}
            defaultValue=""
            render={({ field }) =>
                (
                    <SAccordion expanded={expand}>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon onClick={toggleAcordion} />}
                        >
                            <LInput
                                error={errors?.title?.message}
                                hideError
                                {...field} 
                            />
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                LanguageTypes.map(x => <h3>{x}</h3>)
                            }
                        </AccordionDetails>
                    </SAccordion>
                )
            }
        />
    )
}