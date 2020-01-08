import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    UserService.prototype.getRoleById = function (id) {
        return this.http.get(this.baseUrl + '/api/getrole/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        return this.http.get(this.baseUrl + '/api/users/' + id)
            .toPromise()
            .then(function (response) { return _this.user = response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getusers = function () {
        return this.http.get(this.baseUrl + '/api/users')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (userData) {
        userData.role = { 'id': 2, 'name': 'user' };
        return this.http.post(this.baseUrl + '/api/users/', userData)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.forgotpassword = function (userData) {
        console.log(userData.email);
        return this.http.get(this.baseUrl + '/api/forgotpass/' + userData.email)
            .toPromise()
            .catch(this.handleError);
    };
    UserService.prototype.resetpassword = function (userData) {
        return this.http.put(this.baseUrl + '/api/reset/', userData)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (userData) {
        userData.role = { 'id': 2, 'name': 'user' };
        return this.http.put(this.baseUrl + '/api/users/' + userData.id, userData)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userData) {
        var _this = this;
        return this.http.post(this.baseUrl + '/api/authenticate', userData)
            .toPromise()
            .then(function (response) { return _this.user = response.json(); });
    };
    UserService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map