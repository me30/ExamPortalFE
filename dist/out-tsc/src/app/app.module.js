import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
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
                ExamComponent
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
                UserService,
                AuthService,
                { provide: APP_BASE_HREF, useValue: '/' }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map