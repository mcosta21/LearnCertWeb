import { SCardContainer, SEmptyTitle } from "./styles";
import { FaRegSadCry } from 'react-icons/fa';

export default function EmptyQuestionCard(){
    return (
        <SCardContainer>
            <FaRegSadCry size={30} />
            <SEmptyTitle>
                Sorry, but this question doesn't have this translation yet.
            </SEmptyTitle>
        </SCardContainer>
    )
}