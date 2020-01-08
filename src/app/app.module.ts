import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HttpModule } from '@angular/http';
import { UserService } from './_services/user.service';
import { AppheaderComponent } from './appheader/appheader.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EdituserComponent } from './edituser/edituser.component';
import {MatRadioModule} from '@angular/material/radio';
import { UserpageComponent } from './userpage/userpage.component';
import { ExamComponent } from './exam/exam.component';
import { ExamassignComponent } from './examassign/examassign.component';
import { AuthService } from './_services/auth.service';
import { ExamService } from './_services/exam.service';
import { QuestionComponent } from './question/question.component';
import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';
import { QuestionService } from './_services/question.service';
import { UsereditprofileComponent } from './usereditprofile/usereditprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    DashboardComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    UserprofileComponent,
    EdituserComponent,
    UserpageComponent,
    ExamComponent,
    ExamassignComponent,
    QuestionComponent,
    ChangeUserPasswordComponent,
    UsereditprofileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    MatRadioModule
  ],
  providers: [
    AuthService,
    UserService,
    ExamService,
    QuestionService,
    {provide: APP_BASE_HREF, useValue : '/' }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
