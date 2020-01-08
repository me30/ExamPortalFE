import { Exam } from './exam';
import { User } from './user';

export class ExamsAssign{
    id:number;
    assignTo:User;
    description:string;
    exam:Exam;
    dateOfAssign:number;
    assignBy:User;
    result:string;
}