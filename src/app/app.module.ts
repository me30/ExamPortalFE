import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './_services/user.service';
import { APP_BASE_HREF } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { AuthService } from './_services/auth.service';
import { ExamService } from './_services/exam.service';
import { QuestionService } from './_services/question.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ExamAssignService } from './_services/examAssign.service';
import { UserProfileService } from './_services/userProfile.service';
import { AnswerService } from './_services/answer.service';
import { ResultService } from './_services/result.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { SignupComponent } from './components/signup/signup.component';
import { ResultComponent } from './components/user_components/userpage/result/result.component';
import { UpdateImageComponent } from './components/userprofile/update-image/update-image.component';
import { QuestionEditComponent } from './components/question/question-edit/question-edit.component';
import { ExamEditComponent } from './components/exam/exam-edit/exam-edit.component';
import { StartExamComponent } from './components/user_components/userpage/start-exam/start-exam.component';
import { ExamassignListComponent } from './components/examassign/examassign-list/examassign-list.component';
import { UserDashboardComponent } from './components/user_components/userpage/user-dashboard/user-dashboard.component';
import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { ExamListComponent } from './components/exam/exam-list/exam-list.component';
import { AddQuestionsComponent } from './components/question/add-questions/add-questions.component';
import { UsereditprofileComponent } from './components/usereditprofile/usereditprofile.component';
import { ChangeUserPasswordComponent } from './components/change-user-password/change-user-password.component';
import { QuestionComponent } from './components/question/question.component';
import { ExamassignComponent } from './components/examassign/examassign.component';
import { ExamComponent } from './components/exam/exam.component';
import { UserpageComponent } from './components/user_components/userpage/userpage.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AppfooterComponent } from './layout/appfooter/appfooter.component';
import { AppmenuComponent } from './layout/appmenu/appmenu.component';
import { AppheaderComponent } from './layout/appheader/appheader.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

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
    ExamEditComponent,
    QuestionListComponent,
    QuestionEditComponent,
    UserDashboardComponent,
    ExamassignListComponent,
    StartExamComponent,
    UpdateImageComponent,
    ResultComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,   
    MatRadioModule,
    FormsModule,
    NgbModule
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    UserService,
    ExamService,
    QuestionService,
    ExamAssignService,
    UserProfileService,
    AnswerService,
    ResultService,
    CookieService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  entryComponents: [
    ExamEditComponent,
    QuestionEditComponent,
    UpdateImageComponent,
    ResultComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
