import LLoading from "@components/LLoading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CertificationForm from "./Form";
import { Certification } from "./domain/certification.model";
import * as api from './services/certification.api';

export default function CertificationFormPage(){

    const { id } = useParams();
    const [certification, setCertification] = useState<Certification>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(id) {
            api.getById(id)
                .then(data => {
                    console.log(data)
                    setCertification(data);
                    setLoading(false);
                })
                .catch(error => {
                    alert(error.message);
                });
        }
        else {
            setCertification(new Certification());
            setLoading(false);
        }
    }, [id]);

    if(loading) {
        return <LLoading />
    }

    return <CertificationForm certification={certification}/>
}