import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.login(this.loginForm.value)
            .then(function (data) {
            if (data != null) {
                if (data.userName == "admin" && data.role.name == "Admin") {
                    //set data in session 
                    // sessionStorage.setItem('loggedUser', data.userName);
                    // sessionStorage.setItem('loggedUserRole', data.role.name);
                    _this.router.navigate(['/admin']);
                }
                else {
                    // sessionStorage.setItem('loggedUser', data.userName);
                    // sessionStorage.setItem('loggedUserRole', data.role.name);
                    _this.router.navigate(['/userPage']);
                }
            }
        }, function (error) {
            _this.loading = false;
            window.confirm('Password not matched! Please enter correct paasword');
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({ selector: 'app-login', templateUrl: 'login.component.html' }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            UserService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map