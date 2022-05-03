import { AnswerOption } from "pages/CertificationPage/models/certification.model"
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
    selectedOptionCode: number | undefined;
    onSelectOption: (option: AnswerOption) => void;
}

enum OptionType {
    Normal,
    Selected,
    Correct,
    Wrong
}

export default function AnswerOptionList({
    answers,
    showCorrect = false,
    selectedOptionCode,
    onSelectOption
}: Props){

    function handleSelectOption(option: AnswerOption) {
        onSelectOption(option);
    }

    function renderOption(option: AnswerOption) {
        
        if(selectedOptionCode && selectedOptionCode === option.code && !showCorrect) {
            return OptionType.Selected;
        }
        
        if((selectedOptionCode === option.code && option.isCorrect) || (option.isCorrect && showCorrect)) {
            return OptionType.Correct;
        }
        else if (selectedOptionCode === option.code && !option.isCorrect) {
            return OptionType.Wrong;
        }
        else if(selectedOptionCode === option.code) {
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
                    <li key={option.id} onClick={() => handleSelectOption(option)}>
                        <OptionButton type={renderOption(option)}/>
                        {option.description}
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

        case OptionType.Correct: return <SCorrectedOptionButton><FiCheck size={16}/></SCorrectedOptionButton>;

        case OptionType.Wrong: return <SWrongOptionButton><CgClose size={16} /></SWrongOptionButton>;

        default: return <SNormalOptionButton />
    } 
}