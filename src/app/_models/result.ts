import { User } from './user';
import { Exam } from './exam';

export class Result {
    id: number;
    user: User;
    totalCorrectAnswer: number;
    outOff: number;
    result: String;
    cutOff: number;
    exam: Exam;
}