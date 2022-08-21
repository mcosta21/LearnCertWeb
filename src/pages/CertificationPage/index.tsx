import { useEffect, useState } from "react";
import LBody from "@components/LBody";
import { useParams } from "react-router-dom";
import HeaderCertification from "./components/HeaderCertification";
import PanelCertification from "./components/PanelCertification";
import * as api from '../CertificationFormPage/services/certification.api';
import { Certification } from "@pages/CertificationFormPage/domain/certification.model";

export default function CertificationLearnPage(){

    const { id } = useParams();
    const [certification, setCertification] = useState<Certification>(new Certification());
    const [loading, setLoading] = useState<boolean>(true);
    const [showAllAnswer, setShowAllAnswer] = useState<boolean>(false);

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
            setLoading(false);
        }
    }, []);

    if(!certification.id) {
        return <h1>loading</h1>
    }
    
    function handleShowAllAnswer(){
        setShowAllAnswer(oldState => !oldState);
    }

    return (
        <LBody hideHeader>

            <HeaderCertification 
                certification={certification} 
                showAllAnswer={showAllAnswer}
                handleShowAllAnswer={handleShowAllAnswer}
            />

            <PanelCertification 
                certification={certification} 
                showAllAnswer={showAllAnswer}
            />

        </LBody>
    )
}