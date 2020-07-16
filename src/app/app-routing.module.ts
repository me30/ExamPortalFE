import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { HomeComponent } from './components/home/home.component';
import { AppmenuComponent } from './layout/appmenu/appmenu.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChangeUserPasswordComponent } from './components/change-user-password/change-user-password.component';
import { UserpageComponent } from './components/user_components/userpage/userpage.component';
import { UserDashboardComponent } from './components/user_components/userpage/user-dashboard/user-dashboard.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { RegisterComponent } from './components/register/register.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { UsereditprofileComponent } from './components/usereditprofile/usereditprofile.component';
import { ExamComponent } from './components/exam/exam.component';
import { ExamassignComponent } from './components/examassign/examassign.component';
import { ExamassignListComponent } from './components/examassign/examassign-list/examassign-list.component';
import { ExamListComponent } from './components/exam/exam-list/exam-list.component';
import { QuestionComponent } from './components/question/question.component';
import { AddQuestionsComponent } from './components/question/add-questions/add-questions.component';
import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { QuestionEditComponent } from './components/question/question-edit/question-edit.component';
import { StartExamComponent } from './components/user_components/userpage/start-exam/start-exam.component';


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