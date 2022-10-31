import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CertificationForm from "./Form";
import { Certification } from "./domain/certification.model";
import * as api from './services/certification.api';

export default function CertificationFormPage(){

    const { id } = useParams();
    const [certification, setCertification] = useState<Certification>();
    const [loading, setLoading] = useState<boolean>(true);
    const [isNew, setIsNew] = useState<boolean>(true);

    useEffect(() => {
        if(id) {
            api.getById(id, true)
                .then(data => {
                    setCertification(data);
                    setIsNew(false);
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

    return <CertificationForm 
                certification={certification} 
                isNew={isNew}
                loading={loading}
            />
}