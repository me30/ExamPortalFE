import { RouterModule } from '@angular/router';
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
var appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot', component: ForgotpasswordComponent },
    { path: 'reset', component: ResetpasswordComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: 'userPage', component: UserpageComponent, canActivate: [AuthGuard] },
            { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
            { path: 'profile', component: UserprofileComponent, canActivate: [AuthGuard] },
            { path: 'edit', component: EdituserComponent, canActivate: [AuthGuard] },
            { path: 'user/register', component: RegisterComponent, canActivate: [AuthGuard] },
            { path: 'cngpass', component: ResetpasswordComponent, canActivate: [AuthGuard] },
            { path: 'exam', component: ExamComponent, canActivate: [AuthGuard] },
            // otherwise redirect to home
            { path: '**', redirectTo: '' }
        ]
    },
    { path: '**', redirectTo: '' }
];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map