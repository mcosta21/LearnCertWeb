import { SHeaderContainer } from "./styles";
import { GoSettings } from 'react-icons/go';

interface Props {
    title: string;
    countQuestions: number;
    lastReviewed: Date;
    logoUrl: string;
}

export default function HeaderCertification({
    title,
    countQuestions,
    lastReviewed,
    logoUrl
}: Props){
    return (
        <SHeaderContainer>
            <aside>
                <img src={logoUrl} />

                <div>
                    <h1>{title}</h1>
                    <p>{countQuestions} questions / Last reviewed: {lastReviewed.toDateString()}</p>
                </div>
            </aside>

            <button>
                <GoSettings />
            </button>
        </SHeaderContainer>
    )
}