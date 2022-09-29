import { OptionType } from "@components/LAnswerOptionItem/models";
import { AnswerOption } from "@pages/CertificationPage/domain/models/certification.model";
import { LAnswerOptionItem } from "@components/LAnswerOptionItem";
import {
    SOptionsList
} from './styles';


interface Props {
    answers: AnswerOption[];
    showCorrect: boolean;
    selectedOptionCode: number | undefined;
    onSelectAnswer: (option: AnswerOption) => void;
}


export default function AnswerOptionList({
    answers,
    showCorrect = false,
    selectedOptionCode,
    onSelectAnswer: onSelectOption
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
                        <LAnswerOptionItem type={renderOption(option)} label={option.description} />
                    </li>
                ))
            }
        </SOptionsList>
    )
}

