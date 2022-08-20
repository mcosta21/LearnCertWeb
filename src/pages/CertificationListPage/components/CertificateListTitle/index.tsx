import { FormControlLabel, IconButton, Switch } from "@mui/material";
import { useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";

import { SCertificateListTitle } from "./styles";


interface Props {
    title: string;
}

export function CertificateListTitle({
    title
}: Props){

    return (
        <>
            <SCertificateListTitle>
                <span>{title}</span>
            </SCertificateListTitle>

        </>
    )
}

