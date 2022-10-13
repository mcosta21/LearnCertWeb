import { Certification, QuestionModelCard } from '@pages/CertificationFormPage/domain/certification.model';
import _ from 'lodash';

export abstract class CertificationHelper {

    public static questions(certification: Certification): QuestionModelCard[] {
        const questions = [] as QuestionModelCard[];
        var index = 1;
        certification.modules.forEach(module => {
            module.questions.forEach(question => {
                questions.push({ 
                    ...question, 
                    collapsed: true, 
                    moduleCode: module.code,
                    moduleTitle: module.title,
                    index
                } as QuestionModelCard)
                index++;
            });
        });
        
        return _.orderBy(questions, ['moduleCode', 'code']);
    }
    
    public static sortableQuestions(certification: Certification): QuestionModelCard[] {
        const questions = CertificationHelper.questions(certification);

        return this.shuffle(questions).map((q, newIndex) => ({ ...q, index: newIndex + 1}));
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