import { RoleName } from './role';

export class User {
    id: number;
    password: string;
    userName: string;
    firstName: string;
    lastName: string;
    role: RoleName;
    dob: Date;
    email: string;
    gender: string;
    resetToken : string;
}