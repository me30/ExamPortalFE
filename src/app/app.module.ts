import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { MatRadioModule } from '@angular/material/radio';
import { UserpageComponent } from './userpage/userpage.component';
import { ExamComponent } from './exam/exam.component';
import { ExamassignComponent } from './examassign/examassign.component';
import { AuthService } from './_services/auth.service';
import { ExamService } from './_services/exam.service';
import { QuestionComponent } from './question/question.component';
import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';
import { QuestionService } from './_services/question.service';
import { UsereditprofileComponent } from './usereditprofile/usereditprofile.component';
import { AddQuestionsComponent } from './question/add-questions/add-questions.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ExamListComponent } from './exam/exam-list/exam-list.component';
import { ExamEditComponent } from './exam/exam-edit/exam-edit.component';


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
    UsereditprofileComponent,
    AddQuestionsComponent,
    ExamListComponent,
    ExamEditComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    routing,
    MatRadioModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    UserService,
    ExamService,
    QuestionService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  entryComponents: [ExamEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
