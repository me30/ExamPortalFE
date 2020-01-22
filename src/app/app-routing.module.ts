import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ExamComponent } from './exam/exam.component';
import { ExamassignComponent } from './examassign/examassign.component';
import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';
import { QuestionComponent } from './question/question.component';
import { RoleName } from './_models/role';
import { UsereditprofileComponent } from './usereditprofile/usereditprofile.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AddQuestionsComponent } from './question/add-questions/add-questions.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'forgot', component: ForgotpasswordComponent },
    { path: 'reset', component: ResetpasswordComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] ,
    children: [
        { path: 'userPage', component: UserpageComponent,canActivate: [AuthGuard] },
        { path: 'admin', component: AdminComponent,canActivate: [AuthGuard] },
        { path: 'profile', component: UserprofileComponent, canActivate: [AuthGuard] },
        { path: 'editprofile', component: UsereditprofileComponent,canActivate: [AuthGuard] },
        { path: 'user/register', component: RegisterComponent,canActivate: [AuthGuard]},
        { path: 'cngpass', component: ChangeUserPasswordComponent, canActivate: [AuthGuard] },
        { path: 'exam', component: ExamComponent, canActivate:[AuthGuard] },
        { path: 'examassign', component: ExamassignComponent, canActivate:[AuthGuard] },
        { path: 'question', component: QuestionComponent, canActivate:[AuthGuard] },
        { path: 'question/add', component: AddQuestionsComponent, canActivate:[AuthGuard] },
        { path: 'user/edit/:id', component: EdituserComponent, canActivate:[AuthGuard]},
        { path: 'menu', component: AppmenuComponent, canActivate:[AuthGuard]},
        // otherwise redirect to home
        { path: '**', redirectTo: '' }
      ]
    },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);