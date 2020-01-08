import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
    }
    EdituserComponent.prototype.ngOnInit = function () {
        this.editUserForm = this.formBuilder.group({
            id: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', Validators.required],
            gender: ['', Validators.required],
            dob: ['', Validators.required]
        });
        this.initForm();
    };
    Object.defineProperty(EdituserComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.editUserForm.controls; },
        enumerable: true,
        configurable: true
    });
    EdituserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.editUserForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.updateUser(this.editUserForm.value)
            .then(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
        });
    };
    EdituserComponent.prototype.initForm = function () {
        var firstName = '';
        var lastName = '';
        var userName = '';
        var password = '';
        var email = '';
        var gender = '';
        var dob;
        var id;
        var user = this.userService.user;
        id = user.id;
        firstName = user.firstName;
        lastName = user.lastName;
        userName = user.userName;
        password = user.password;
        email = user.email;
        gender = user.gender;
        dob = user.dob;
        this.editUserForm = new FormGroup({
            'id': new FormControl(id),
            'firstName': new FormControl(firstName, Validators.required),
            'lastName': new FormControl(lastName, Validators.required),
            'userName': new FormControl(userName, Validators.required),
            'password': new FormControl(password, Validators.required),
            'email': new FormControl(email, Validators.required),
            'gender': new FormControl(gender, Validators.required),
            'dob': new FormControl(dob, Validators.required),
        });
    };
    EdituserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edituser',
            templateUrl: './edituser.component.html',
            styleUrls: ['./edituser.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            UserService])
    ], EdituserComponent);
    return EdituserComponent;
}());
export { EdituserComponent };
//# sourceMappingURL=edituser.component.js.map