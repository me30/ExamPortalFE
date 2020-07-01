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
import { ExamListComponent } from './exam/exam-list/exam-list.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionEditComponent } from './question/question-edit/question-edit.component';
import { UserDashboardComponent } from './userpage/user-dashboard/user-dashboard.component';
import { ExamassignListComponent } from './examassign/examassign-list/examassign-list.component';
import { StartExamComponent } from './userpage/start-exam/start-exam.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: SignupComponent },
    { path: 'forgot', component: ForgotpasswordComponent },
    { path: 'reset', component: ResetpasswordComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] ,
    children: [
        { path: 'menu', component: AppmenuComponent, canActivate:[AuthGuard]},
        { path: 'admin', component: AdminComponent,canActivate: [AuthGuard] },
        { path: 'change/password', component: ChangeUserPasswordComponent, canActivate: [AuthGuard] },
        { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
        { path: 'userPage', component: UserpageComponent,canActivate: [AuthGuard] },
        { path: 'user/edit/:id', component: EdituserComponent, canActivate:[AuthGuard]},
        { path: 'user/register', component: RegisterComponent,canActivate: [AuthGuard]},
        { path: 'profile', component: UserprofileComponent, canActivate: [AuthGuard] },
        { path: 'editprofile', component: UsereditprofileComponent,canActivate: [AuthGuard] },
        { path: 'exam', component: ExamComponent, canActivate:[AuthGuard] },
        { path: 'examassign', component: ExamassignComponent, canActivate:[AuthGuard] },
        { path: 'examAssign/list', component: ExamassignListComponent, canActivate:[AuthGuard] },
        { path: 'exam/list', component: ExamListComponent,canActivate: [AuthGuard] },
        { path: 'question', component: QuestionComponent, canActivate:[AuthGuard] },
        { path: 'question/add', component: AddQuestionsComponent, canActivate:[AuthGuard] },
        { path: 'question/list', component: QuestionListComponent,canActivate:[AuthGuard] },
        { path: 'question/edit', component: QuestionEditComponent,canActivate:[AuthGuard]},
        { path: 'start/exam', component: StartExamComponent,canActivate:[AuthGuard]},
        // otherwise redirect to home
        { path: '**', redirectTo: '' }
      ]
    },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes,{
    onSameUrlNavigation: 'reload'
  });