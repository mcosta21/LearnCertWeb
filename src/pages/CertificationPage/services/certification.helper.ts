import { Certification, QuestionModelCard } from '@pages/CertificationFormPage/domain/certification.model';

export abstract class CertificationHelper {

    public static questions(certification: Certification): QuestionModelCard[] {
        const questions = [] as QuestionModelCard[];
        certification.modules.forEach(module => {
            module.questions.forEach(question => {
                questions.push({ 
                    ...question, 
                    collapsed: true, 
                    moduleCode: module.code,
                    moduleTitle: module.title
                } as QuestionModelCard)
            });
        });
        
        return questions;
    }
    
    public static sortableQuestions(certification: Certification): QuestionModelCard[] {
        const questions = CertificationHelper.questions(certification);

        return this.shuffle(questions);
    }

    private static shuffle(array) {
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