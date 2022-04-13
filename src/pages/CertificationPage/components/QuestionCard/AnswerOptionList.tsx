import { AnswerOption } from "pages/CertificationPage/models/certification.model"
import { useState } from "react";
import { 
    SCorrectedOptionButton, 
    SNormalOptionButton, 
    SOptionsList, 
    SSelectedOptionButton, 
    SWrongOptionButton 
} from './styles';

import { FiCheck } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

interface Props {
    answers: AnswerOption[];
    showCorrect: boolean;
}

enum OptionType {
    Normal,
    Selected,
    Correct,
    Wrong
}

export default function AnswerOptionList({
    answers,
    showCorrect = false
}: Props){

    const [selectedOptionId, setSelectedOptionId] = useState<string>();

    function onSelectOption(option: AnswerOption) {
        setSelectedOptionId(option.id);
    }

    function renderOption(option: AnswerOption) {
        
        if(selectedOptionId && selectedOptionId === option.id && !showCorrect) {
            return OptionType.Selected;
        }
        
        if((selectedOptionId === option.id && option.isCorrect) || (option.isCorrect && showCorrect)) {
            return OptionType.Correct;
        }
        else if (selectedOptionId === option.id && !option.isCorrect) {
            return OptionType.Wrong;
        }
        else if(selectedOptionId === option.id) {
            return OptionType.Selected;
        }
        else {
            return OptionType.Normal;
        }
    }

    return (
        <SOptionsList>
            {
                answers.map(option => (
                    <li key={option.id} onClick={() => onSelectOption(option)}>
                        <OptionButton type={renderOption(option)}/>
                        {option.description} {option.isCorrect.toString()}
                    </li>
                ))
            }
        </SOptionsList>
    )
}

interface OptionButtonProps {
    type: OptionType;
};

function OptionButton({ type }: OptionButtonProps){
    switch(type) {
        
        case OptionType.Selected: return <SSelectedOptionButton><span/></SSelectedOptionButton>;

        case OptionType.Correct: return <SCorrectedOptionButton><FiCheck size={15}/></SCorrectedOptionButton>;

        case OptionType.Wrong: return <SWrongOptionButton><CgClose size={15} /></SWrongOptionButton>;

        default: return <SNormalOptionButton />
    } 
}