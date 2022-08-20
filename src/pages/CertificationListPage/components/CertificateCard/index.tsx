import { FormControlLabel, IconButton, Switch } from "@mui/material";
import { useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";

import {SCertificateCard } from "./styles";
import {CertificationFlat} from "@pages/CertificationListPage/domain/certification-flat.model";



interface Props extends CertificationFlat {
    onCertificateClick: (certificateId: string) => void
}

const IMG_PATH = '/images/certificates/'

export function CertificateCard({
    id, title, countQuestions, imgFileName, imgAlt, languageType, onCertificateClick
}: Props){

    return (
        <>
            <SCertificateCard
                onClick={() => onCertificateClick(id)}
            >
                <div className="certificate-img">
                    <img src={`${IMG_PATH}${imgFileName}`} alt={imgAlt}/>
                </div>
                <div className="certificate-info-container">
                    <span className="certificate-name">{title}</span>
                    <span className="certificate-questions">{countQuestions + " questions"}</span>
                </div>
            </SCertificateCard>
        </>
    )
}

