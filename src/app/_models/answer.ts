import { Question } from './question';
import { Exam } from './exam';

export class Answer{
    id: number;
    ans: string;
    answerIsGiven: Boolean;
    queations: Question;
    examAttendantDate: Date;
    exam: Exam;
}