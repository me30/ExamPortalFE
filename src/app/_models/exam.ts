import { User } from './user';

export class Exam {
    id: number;
    name: string;
    createdBy: User;
    createdDate: number;
}