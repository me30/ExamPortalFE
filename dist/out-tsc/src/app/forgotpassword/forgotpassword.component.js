import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(formBuilder, route, router, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            email: ['', Validators.required],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(ForgotpasswordComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.resetForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.resetForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.forgotpassword(this.resetForm.value)
            .then(function (data) {
            window.confirm('Please check your email!');
        }, function (error) {
            _this.loading = false;
        });
    };
    ForgotpasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-forgotpassword',
            templateUrl: './forgotpassword.component.html',
            styleUrls: ['./forgotpassword.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            Router,
            UserService])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());
export { ForgotpasswordComponent };
//# sourceMappingURL=forgotpassword.component.js.map