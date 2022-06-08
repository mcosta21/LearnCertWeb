import { FiCheck } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { SSelectedOptionButton, SCorrectedOptionButton, SWrongOptionButton, SNormalOptionButton, LAnswerOptionItemContainer } from "./styles";
import { OptionType } from './models';

interface OptionButtonProps {
    type: OptionType;
    label: string;
};

export function LAnswerOptionItem({ type, label }: OptionButtonProps){
    return (
        <LAnswerOptionItemContainer>
            <div>
                <OptionItem type={type} />
            </div>
            <span>{label}</span>
        </LAnswerOptionItemContainer>
    )
}

interface OptionItemProps {
    type: OptionType;
}

function OptionItem({ type }: OptionItemProps) {
    switch(type) {
        
        case OptionType.Selected: return <SSelectedOptionButton><span/></SSelectedOptionButton>;

        case OptionType.Correct: return <SCorrectedOptionButton><FiCheck size={16}/></SCorrectedOptionButton>;

        case OptionType.Wrong: return <SWrongOptionButton><CgClose size={16} /></SWrongOptionButton>;

        default: return <SNormalOptionButton />
    } 
}