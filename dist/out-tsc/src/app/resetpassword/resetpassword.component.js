import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { PassWordValidator } from './password.validator';
var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(formBuilder, route, router, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.email = params['token'];
        });
        this.resetForm = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPwd: ['', Validators.required],
            email: ['', Validators.required],
            id: ['', Validators.required],
            userName: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            role: ['', Validators.required],
            dob: ['', Validators.required],
            gender: ['', Validators.required]
        }, {
            validator: PassWordValidator.matchPwds
        });
        this.userService.resetpassword(this.email).then(function (data) {
            _this.user = data;
            _this.resetForm.setValue({
                password: null,
                confirmPwd: null,
                email: _this.email,
                id: _this.user.id,
                userName: _this.user.userName,
                firstName: _this.user.firstName,
                lastName: _this.user.lastName,
                role: _this.user.role,
                dob: _this.user.dob,
                gender: _this.user.gender
            });
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(ResetpasswordComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.resetForm.controls; },
        enumerable: true,
        configurable: true
    });
    ResetpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.updateUser(this.resetForm.value)
            .then(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
        });
    };
    ResetpasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-resetpassword',
            templateUrl: './resetpassword.component.html',
            styleUrls: ['./resetpassword.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            UserService])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());
export { ResetpasswordComponent };
//# sourceMappingURL=resetpassword.component.js.map