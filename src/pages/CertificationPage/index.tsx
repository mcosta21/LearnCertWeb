import LBody from "../../components/LBody";
import HeaderCertification from "./components/HeaderCertification";
import PanelCertification from "./components/PanelCertification";
import { cert } from './mock';

export default function CertificationPage(){
    const certification = cert as any;
    return (
        <LBody>

            <HeaderCertification 
                title={"Microsoft  Azure Fundamentals AZ-900"}
                countQuestions={100}
                lastReviewed={new Date()}
                logoUrl={"https://d2j6dbq0eux0bg.cloudfront.net/images/14319752/1386739702.jpg"}
            />

            <PanelCertification certification={certification} />

        </LBody>
    )
}