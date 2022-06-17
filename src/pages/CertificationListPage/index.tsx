import LBody from "@components/LBody";
import { useEffect } from "react";
import * as api from './services/certification.api';

export default function CertificationListPage(){

    useEffect(() => {
        api.index().then(certifications => {
            console.log(certifications)
        });
    }, []);
    return (
        <LBody>
            listar certificações
        </LBody>
    )
}