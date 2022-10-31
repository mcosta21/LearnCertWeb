import { Certification } from '@pages/CertificationFormPage/domain/certification.model';
import { decrypt } from '@services/EncryptionHandler';
import _ from 'lodash';
import { QuestionModelCard } from '../domain/models/certification.model';

export abstract class CertificationHelper {

    public static parse(data: Certification): Certification {
        data.modules.forEach(module => {
            module.questions.forEach(question => {
                question.answerOptions.forEach(answer => {
                    answer.isCorrect = this.parseAnswerValue(answer.value);
                })
            });
        });

        return data;
    }

    public static questions(certification: Certification): QuestionModelCard[] {
        const questions = [] as QuestionModelCard[];
        var index = 1;
        certification.modules.forEach(module => {
            module.questions.forEach(question => {
                questions.push(new QuestionModelCard(question, module.code, module.title, index));
                index++;
            });
        });

        return _.orderBy(questions, ['moduleCode', 'code']);
    }
    
    public static sortableQuestions(certification: Certification): QuestionModelCard[] {
        const questions = CertificationHelper.questions(certification);

        return this.shuffle(questions).map((q, newIndex) => ({ ...q, index: newIndex + 1}));
    }

    public static parseAnswerValue(value: string) {
        return decrypt(value).split('/')[1].toLowerCase() === 'true' ? true : false;;
    }

    private static shuffle(array): QuestionModelCard[] {
        let currentIndex = array.length, randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    
}