import { Certification, Module, QuestionDescription, QuestionResult } from "pages/CertificationPage/models/certification.model";
import QuestionCard from "../QuestionCard";
import { SPanelContainer } from "./styles";

interface Props {
    certification: Certification
}


export default function PanelCertification({
    certification
}: Props){
    console.log(certification)

    const questions = [] as QuestionResult[];
    certification.modules.forEach(module => {
        module.questions.forEach(question => {
            question.questionDescriptions.map(x => questions.push({ 
                id: x.id, 
                moduleTitle: module.title, 
                questionDescription: x.description,
                answerOptions: x.answerOptions
            }))
        });
    });


    return (
        <SPanelContainer>
            <aside>
                {
                    questions.map(x => (
                        <QuestionCard key={x.id} value={x} />
                    ))
                }
            </aside>

            <aside>
                {
                    questions.map(x => (
                        <QuestionCard key={x.id} value={x} />
                    ))
                }
            </aside>
        </SPanelContainer>
    )
}