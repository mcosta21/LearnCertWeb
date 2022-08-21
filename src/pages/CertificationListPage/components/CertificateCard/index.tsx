
import { CertificationFlat } from "@pages/CertificationListPage/domain/certification-flat.model";
import { RouterKey } from "@routes/routekeys";
import Translate from "@services/i18nProvider/Translate";
import { useNavigate } from "react-router-dom";
import { SCertificateCard } from "./styles";

interface Props {
    certification: CertificationFlat;
}

export function CertificationCard({
    certification
}: Props) {

    const navigate = useNavigate();

    function handleClick(){
        navigate(`${RouterKey.CertificationLearn}/${certification.id}`)
    }
    
    return (
        <SCertificateCard onDoubleClick={handleClick}>
            <div className="certificate-img">
                <img src={certification.imageUrl} alt={certification.title} />
            </div>
            <div className="certificate-info-container">
                <span className="certificate-name">
                    {certification.title}
                </span>
                <span className="certificate-questions">
                    {certification.countQuestions + ' '}
                    <Translate value="QUESTION.LABEL" />
                </span>
            </div>
        </SCertificateCard>
    )
}

