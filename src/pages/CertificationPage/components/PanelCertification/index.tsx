import { Certification } from "@pages/CertificationFormPage/domain/certification.model";
import QuestionCard from "../QuestionCard";
import { SPanelContainer } from "./styles";

interface Props {
    certification: Certification,
    showAllAnswer: boolean;
}

export default function PanelCertification({
    certification,
    showAllAnswer
}: Props){
    return (
        <SPanelContainer>
            {
                certification.modules.map(module => (
                    module.questions.map((question, index) => (
                        <aside key={index}>
                            <QuestionCard 
                                key={question.id} 
                                question={question} 
                                module={module}
                                showCorrectAnswer={showAllAnswer}
                            />
                        </aside>
                    ))     
                ))
                
            }
        </SPanelContainer>
    )
}
