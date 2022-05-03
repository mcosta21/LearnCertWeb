import { useEffect, useState } from "react";
import LBody from "../../components/LBody";
import HeaderCertification from "./components/HeaderCertification";
import PanelCertification from "./components/PanelCertification";
import { CertificationModel } from "./models/certification.model";
import * as certificationApi from './services/certification.api';

export default function CertificationPage(){
    const [certification, setCertification] = useState<CertificationModel>(new CertificationModel());

    useEffect(() => {
        loadCertificationById('5b8daa0a-7f4e-4c7c-ad98-736df8453533')
    }, []);

    async function loadCertificationById(id: string) {
        const response = await certificationApi.getCertification(id);
        console.log(response)
        setCertification(response);
    }

    if(!certification.id) {
        return <h1>loading</h1>
    }
    
    return (
        <LBody>

            <HeaderCertification 
                title={certification.title}
                countQuestions={certification.questionDescriptions.length}
                lastReviewed={new Date()}
                logoUrl={"https://d2j6dbq0eux0bg.cloudfront.net/images/14319752/1386739702.jpg"}
            />

            <PanelCertification certification={certification} />

        </LBody>
    )
}