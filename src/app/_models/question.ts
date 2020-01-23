import { Exam } from './exam';

export class Question{
    id: number;
    question: string;
    exam: Exam;
    ansCategory: string;
    correct_ans: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    option1IsAns: Boolean;
    option2IsAns: Boolean;
    option3IsAns: Boolean;
    option4IsAns: Boolean;
}