(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/angular-4-data-table-bootstrap-4/node_modules/@angular/core/@angular lazy recursive":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/angular-4-data-table-bootstrap-4/node_modules/@angular/core/@angular lazy namespace object ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/angular-4-data-table-bootstrap-4/node_modules/@angular/core/@angular lazy recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guard/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/_guard/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = [];
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currantUser = sessionStorage.getItem('user');
        if (currantUser) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_models/role.ts":
/*!*********************************!*\
  !*** ./src/app/_models/role.ts ***!
  \*********************************/
/*! exports provided: RoleName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleName", function() { return RoleName; });
var RoleName;
(function (RoleName) {
    RoleName["Admin"] = "Admin";
    RoleName["User"] = "User";
})(RoleName || (RoleName = {}));


/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    AuthService.prototype.login = function (userData) {
        return this.http.post(this.baseUrl + '/signin', userData)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    AuthService.prototype.createUser = function (userData) {
        return this.http.post(this.baseUrl + '/signup', userData)
            .toPromise().then(function (response) { return response; })
            .catch(this.handleError);
    };
    AuthService.prototype.forgotpassword = function (useremail) {
        return this.http.post(this.baseUrl + '/forgotpassword', useremail)
            .toPromise()
            .catch(this.handleError);
    };
    AuthService.prototype.resetpassword = function (data) {
        return this.http.post(this.baseUrl + '/reset', data)
            .toPromise().then(function (response) { return response; })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/exam.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/exam.service.ts ***!
  \*******************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");




var ExamService = /** @class */ (function () {
    function ExamService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.baseUrl = 'http://localhost:8080';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    ExamService.prototype.createExam = function (exam) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.userService.token
        });
        exam.createdBy = this.userService.user;
        exam.createdDate = Date.now();
        return this.http.post(this.baseUrl + '/exam', exam, { headers: headers })
            .toPromise().then(function (response) { return _this.exam = response.json(); })
            .catch(this.handleError);
    };
    ExamService.prototype.getExams = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.userService.token
        });
        return this.http.get(this.baseUrl + '/exam/findAll', { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExamService.prototype.getExamById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.userService.token
        });
        return this.http.get(this.baseUrl + '/exam/' + id, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExamService.prototype.examAssign = function (examAssign) {
        examAssign.assignBy = this.user;
        examAssign.dateOfAssign = Date.now();
        return this.http.post(this.baseUrl + '/examAssign', examAssign)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Store Selected exam for questions
    ExamService.prototype.addExam = function (exam) {
        return this.selectedExam = exam;
    };
    ExamService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    ExamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ExamService);
    return ExamService;
}());



/***/ }),

/***/ "./src/app/_services/question.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/question.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam.service */ "./src/app/_services/exam.service.ts");





var QuestionService = /** @class */ (function () {
    function QuestionService(http, examService, userService) {
        this.http = http;
        this.examService = examService;
        this.userService = userService;
        this.baseUrl = 'http://localhost:8080';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    QuestionService.prototype.createQuestion = function (question) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.userService.token
        });
        question.exam = this.examService.selectedExam;
        return this.http.post(this.baseUrl + '/question', question, { headers: headers })
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.token = JSON.parse(sessionStorage.getItem('token'));
    }
    UserService.prototype.getUserById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Authorization': 'Bearer ' + this.token
        });
        return this.http.get(this.baseUrl + '/user/' + id, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    UserService.prototype.getUserbyToken = function (token) {
        var _this = this;
        this.token = token;
        sessionStorage.setItem('token', JSON.stringify(token));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.get(this.baseUrl + '/user/find/', { headers: headers })
            .toPromise()
            .then(function (response) { return _this.user = response.json(); });
    };
    UserService.prototype.getusers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.http.get(this.baseUrl + '/user/findAll', { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    UserService.prototype.getOnlyUsers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.http.get(this.baseUrl + '/user/getOnlyUsres', { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    UserService.prototype.updateUser = function (userData) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        if (userData.role === _models_role__WEBPACK_IMPORTED_MODULE_3__["RoleName"].Admin) {
            userData.role = _models_role__WEBPACK_IMPORTED_MODULE_3__["RoleName"].Admin;
        }
        else {
            userData.role = _models_role__WEBPACK_IMPORTED_MODULE_3__["RoleName"].User;
        }
        return this.http.put(this.baseUrl + '/user', userData, { headers: headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    UserService.prototype.updateProfile = function (userData) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        if (userData.role === _models_role__WEBPACK_IMPORTED_MODULE_3__["RoleName"].Admin) {
            userData.role = _models_role__WEBPACK_IMPORTED_MODULE_3__["RoleName"].Admin;
        }
        else {
            userData.role = _models_role__WEBPACK_IMPORTED_MODULE_3__["RoleName"].User;
        }
        return this.http.put(this.baseUrl + '/user/editProfile', userData, { headers: headers })
            .toPromise()
            .then(function (response) { return _this.user = response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.changePassword = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.http.post(this.baseUrl + '/user/changepassword', data, { headers: headers })
            .toPromise().then(function (response) { return response; })
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        return this.http.delete(this.baseUrl + '/user/' + user.id, { headers: headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; max-width: 1000px; margin-bottom: 50px;\">\n  \n\n    <data-table \n      headerTitle=\"Angular 4 CRUD Example With Bootstrap 4 Datatable\"\n      [items]=\"items\"\n      [itemCount]=\"itemCount\"\n      (reload)=\"reloadItems($event)\"\n  \n      (rowClick)=\"rowClick($event)\"\n      (rowDoubleClick)=\"rowDoubleClick($event)\"\n      [rowTooltip]=\"rowTooltip\"\n      >\n      <data-table-column\n          [property]=\"'name'\"\n          [header]=\"'Name'\"\n          [sortable]=\"true\"\n          [resizable]=\"true\"\n          >\n      </data-table-column>\n      <data-table-column\n          [property]=\"'jobTitle'\"\n          [header]=\"'Job title'\"\n          [sortable]=\"true\"\n          >        \n      </data-table-column>\n      <data-table-column\n        [property]=\"'Actions'\"\n        [header]=\"'Actions'\">\n        <template #dataTableCell let-item=\"item\">\n              <span style=\"color: rgb(232, 0, 0)\">\n              <a href=\"javascript:void(0);\" (click)=\"getData(item)\" data-toggle=\"modal\" data-target=\"#add-edit-Modal\">Edit</a>\n              </span>\n              <span style=\"color: rgb(232, 0, 0)\">\n              <a href=\"javascript:void(0);\" (click)=\"delData(item)\">Delete</a>\n              </span>\n        </template>\n      </data-table-column>\n    </data-table>\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_4_data_table_bootstrap_4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-4-data-table-bootstrap-4 */ "./node_modules/angular-4-data-table-bootstrap-4/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.title = 'Angular 4 CRUD Example Using Bootstrap Datatable';
        //Static data, you can change as per your need
        this.users = [];
        this.items = [];
        this.itemCount = 0;
        this.params = { offset: 0, limit: 10 }; //Static can be changed as per your need
        this.formFlag = 'add';
        this.userService.getOnlyUsers().then(function (users) {
            _this.users = users;
        });
        this.itemResource = new angular_4_data_table_bootstrap_4__WEBPACK_IMPORTED_MODULE_4__["DataTableResource"](this.users);
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
        this.reloadItems(this.params);
    }
    AdminComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    //Init method
    AdminComponent.prototype.ngOnInit = function () {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    };
    AdminComponent.prototype.initUser = function () {
        //User form reset
        this.userForm.reset();
        this.formFlag = 'add';
    };
    //Delete user's data
    AdminComponent.prototype.delData = function (user) {
        this.userService.deleteUser(user)
            .then(function (data) {
            console.log(data);
        });
        this.reloadTableManually();
    };
    AdminComponent.prototype.edit = function (user) {
        this.router.navigate(['/user/edit', user.id]);
    };
    //Reload table manually after add/edit
    AdminComponent.prototype.reloadTableManually = function () {
        var _this = this;
        this.reloadItems(this.params);
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalClose'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdminComponent.prototype, "modalClose", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_guard/auth.guard */ "./src/app/_guard/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/resetpassword/resetpassword.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edituser/edituser.component */ "./src/app/edituser/edituser.component.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _examassign_examassign_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examassign/examassign.component */ "./src/app/examassign/examassign.component.ts");
/* harmony import */ var _change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./change-user-password/change-user-password.component */ "./src/app/change-user-password/change-user-password.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _usereditprofile_usereditprofile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./usereditprofile/usereditprofile.component */ "./src/app/usereditprofile/usereditprofile.component.ts");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./appmenu/appmenu.component */ "./src/app/appmenu/appmenu.component.ts");
/* harmony import */ var _question_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./question/add-questions/add-questions.component */ "./src/app/question/add-questions/add-questions.component.ts");


















var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'forgot', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_7__["ForgotpasswordComponent"] },
    { path: 'reset', component: _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'userPage', component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_10__["UserpageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'profile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__["UserprofileComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'editprofile', component: _usereditprofile_usereditprofile_component__WEBPACK_IMPORTED_MODULE_15__["UsereditprofileComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'user/register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'cngpass', component: _change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangeUserPasswordComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'exam', component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_11__["ExamComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'examassign', component: _examassign_examassign_component__WEBPACK_IMPORTED_MODULE_12__["ExamassignComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'question', component: _question_question_component__WEBPACK_IMPORTED_MODULE_14__["QuestionComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'question/add', component: _question_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_17__["AddQuestionsComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'user/edit/:id', component: _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_9__["EdituserComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'menu', component: _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_16__["AppmenuComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            // otherwise redirect to home
            { path: '**', redirectTo: '' }
        ]
    },
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
    onSameUrlNavigation: 'reload'
});


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n<!-- <nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin\">Admin</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>\n<div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n               <router-outlet></router-outlet> \n            </div>\n        </div>\n    </div>\n</div> -->\n \n<!-- <app-appheader></app-appheader>\n<app-appmenu></app-appmenu>\n\n<app-dashboard></app-dashboard>\n<app-appfooter></app-appfooter>  -->\n<router-outlet></router-outlet> "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.currentUser = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.role = '';
        this.currentUser.userName = sessionStorage.getItem('loggedUser');
        this.role = sessionStorage.getItem('loggedUserRole');
    }
    Object.defineProperty(AppComponent.prototype, "isUser", {
        //  ngOnInit() {
        //        this.user = this.userService.user;
        //  }
        get: function () {
            return this.user = this.userService.user;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        sessionStorage.removeItem("loggedUser");
        this.userService.user = null;
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./appheader/appheader.component */ "./src/app/appheader/appheader.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./appmenu/appmenu.component */ "./src/app/appmenu/appmenu.component.ts");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./appfooter/appfooter.component */ "./src/app/appfooter/appfooter.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/resetpassword/resetpassword.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edituser/edituser.component */ "./src/app/edituser/edituser.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/exam/exam.component.ts");
/* harmony import */ var _examassign_examassign_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./examassign/examassign.component */ "./src/app/examassign/examassign.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_services/exam.service */ "./src/app/_services/exam.service.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./change-user-password/change-user-password.component */ "./src/app/change-user-password/change-user-password.component.ts");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_services/question.service */ "./src/app/_services/question.service.ts");
/* harmony import */ var _usereditprofile_usereditprofile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./usereditprofile/usereditprofile.component */ "./src/app/usereditprofile/usereditprofile.component.ts");
/* harmony import */ var _question_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./question/add-questions/add-questions.component */ "./src/app/question/add-questions/add-questions.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_4_data_table_bootstrap_4__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angular-4-data-table-bootstrap-4 */ "./node_modules/angular-4-data-table-bootstrap-4/dist/index.js");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_13__["AppheaderComponent"],
                _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_15__["AppmenuComponent"],
                _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_16__["AppfooterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_18__["ResetpasswordComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgotpasswordComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_20__["UserprofileComponent"],
                _edituser_edituser_component__WEBPACK_IMPORTED_MODULE_21__["EdituserComponent"],
                _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_23__["UserpageComponent"],
                _exam_exam_component__WEBPACK_IMPORTED_MODULE_24__["ExamComponent"],
                _examassign_examassign_component__WEBPACK_IMPORTED_MODULE_25__["ExamassignComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_28__["QuestionComponent"],
                _change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_29__["ChangeUserPasswordComponent"],
                _usereditprofile_usereditprofile_component__WEBPACK_IMPORTED_MODULE_31__["UsereditprofileComponent"],
                _question_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_32__["AddQuestionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                angular_4_data_table_bootstrap_4__WEBPACK_IMPORTED_MODULE_34__["DataTableModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"]],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _services_exam_service__WEBPACK_IMPORTED_MODULE_27__["ExamService"],
                _services_question_service__WEBPACK_IMPORTED_MODULE_30__["QuestionService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appfooter/appfooter.component.css":
/*!***************************************************!*\
  !*** ./src/app/appfooter/appfooter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGZvb3Rlci9hcHBmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/appfooter/appfooter.component.html":
/*!****************************************************!*\
  !*** ./src/app/appfooter/appfooter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <strong>Copyright &copy; 2014-2019 <a href=\"http://adminlte.io\">AdminLTE.io</a>.</strong>\n  All rights reserved.\n  <div class=\"float-right d-none d-sm-inline-block\">\n    <b>Version</b> 3.0.0-rc.3\n  </div>\n</footer>\n\n<!-- Control Sidebar -->\n<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Control sidebar content goes here -->\n</aside>\n<!-- /.control-sidebar -->\n\n"

/***/ }),

/***/ "./src/app/appfooter/appfooter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/appfooter/appfooter.component.ts ***!
  \**************************************************/
/*! exports provided: AppfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppfooterComponent", function() { return AppfooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppfooterComponent = /** @class */ (function () {
    function AppfooterComponent() {
    }
    AppfooterComponent.prototype.ngOnInit = function () {
    };
    AppfooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appfooter',
            template: __webpack_require__(/*! ./appfooter.component.html */ "./src/app/appfooter/appfooter.component.html"),
            styles: [__webpack_require__(/*! ./appfooter.component.css */ "./src/app/appfooter/appfooter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppfooterComponent);
    return AppfooterComponent;
}());



/***/ }),

/***/ "./src/app/appheader/appheader.component.css":
/*!***************************************************!*\
  !*** ./src/app/appheader/appheader.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGhlYWRlci9hcHBoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/appheader/appheader.component.html":
/*!****************************************************!*\
  !*** ./src/app/appheader/appheader.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Navbar -->\n <nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n  <!-- Left navbar links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fas fa-bars\"></i></a>\n    </li>\n    <li class=\"nav-item d-none d-sm-inline-block\" *ngIf=\"isAdmin\">\n      <a class=\"nav-item nav-link\" routerLink=\"/admin\">Home</a>\n    </li>\n    <li class=\"nav-item d-none d-sm-inline-block\" *ngIf=\"isAdmin\">\n      <a [routerLink]=\"['/user/register']\" class=\"nav-item nav-link\">Add User</a>\n    </li>\n    <li class=\"nav-item d-none d-sm-inline-block\" *ngIf=\"isUser\">\n      <a class=\"nav-item nav-link\" routerLink=\"/userPage\">Home</a>\n    </li>\n    \n  </ul>\n\n   <!-- Right navbar links -->\n   <ul class=\"navbar-nav ml-auto\">\n    \n    <li class=\"nav-item\">\n      <a class=\"nav-item nav-link\" routerLink=\"/login\" (click)=\"logout()\">Logout</a>\n    </li>\n  </ul>\n</nav>\n<!-- /.navbar -->\n"

/***/ }),

/***/ "./src/app/appheader/appheader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/appheader/appheader.component.ts ***!
  \**************************************************/
/*! exports provided: AppheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppheaderComponent", function() { return AppheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");





var AppheaderComponent = /** @class */ (function () {
    function AppheaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AppheaderComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AppheaderComponent.prototype, "isAdmin", {
        get: function () {
            return this.userService.user && this.userService.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["RoleName"].Admin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppheaderComponent.prototype, "isUser", {
        get: function () {
            return this.userService.user && this.userService.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["RoleName"].User;
        },
        enumerable: true,
        configurable: true
    });
    AppheaderComponent.prototype.logout = function () {
        sessionStorage.removeItem("user");
        this.userService.user = null;
        this.router.navigate(['/login']);
    };
    AppheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appheader',
            template: __webpack_require__(/*! ./appheader.component.html */ "./src/app/appheader/appheader.component.html"),
            styles: [__webpack_require__(/*! ./appheader.component.css */ "./src/app/appheader/appheader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AppheaderComponent);
    return AppheaderComponent;
}());



/***/ }),

/***/ "./src/app/appmenu/appmenu.component.css":
/*!***********************************************!*\
  !*** ./src/app/appmenu/appmenu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar{\r\n    overflow-y : unset !important;\r\n}\r\n.pnx-msg-icon{\r\n    width: 238px !important;\r\n    height: 50px !important;\r\n}\r\n.mat-cell {\r\n    color: white;\r\n}\r\n.mat-header-cell{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbWVudS9hcHBtZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHBtZW51L2FwcG1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xyXG4gICAgb3ZlcmZsb3cteSA6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBueC1tc2ctaWNvbntcclxuICAgIHdpZHRoOiAyMzhweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jZWxsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxse1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/appmenu/appmenu.component.html":
/*!************************************************!*\
  !*** ./src/app/appmenu/appmenu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Sidebar Container -->\n<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n  <!-- Brand Logo -->\n  <a href=\"http://www.nxsol.com/\" class=\"brand-link\">\n    <img src=\"assets/dist/img/NX.png\" alt=\"AdminLTE Logo\" class=\"brand-image img-circle elevation-3\" style=\"opacity: .8\">\n    <span class=\"brand-text font-weight-light\">N-Xperts Solutions</span>\n  </a>\n\n  <!-- Sidebar -->\n  <div class=\"sidebar\">\n    <!-- Sidebar user panel (optional) -->\n    <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n      <div class=\"image\">\n        <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle elevation-2\" alt=\"User Image\">\n      </div>\n      <div class=\"info\">\n        <a [routerLink]=\"['/profile']\" class=\"d-block\">{{firstName}} {{lastName}}</a>\n      </div>\n    </div>\n\n    <!-- Sidebar Menu -->\n    <nav class=\"mt-2\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n        <!-- Add icons to the links using the .nav-icon class\n               with font-awesome or any other icon font library -->\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/cngpass']\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-edit\"></i>\n            <p>\n              Change Password\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-header\">Exam Portal</li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/exam']\" class=\"nav-link\">\n            <i class=\"far fa-circle nav-icon\"></i>\n            <p>\n              Exam\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/question']\" class=\"nav-link\">\n            <i class=\"far fa-circle nav-icon\"></i>\n            <p>\n              Quetions\n            </p>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- /.sidebar-menu -->\n  </div>\n  <!-- /.sidebar -->\n</aside>"

/***/ }),

/***/ "./src/app/appmenu/appmenu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/appmenu/appmenu.component.ts ***!
  \**********************************************/
/*! exports provided: AppmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppmenuComponent", function() { return AppmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AppmenuComponent = /** @class */ (function () {
    function AppmenuComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.ngOnInit();
    }
    AppmenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.userService.token;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]; })).subscribe(function () {
            _this.userService.getUserbyToken(_this.token)
                .then(function (data) {
                _this.user = data;
                _this.firstName = data.firstName;
                _this.lastName = data.lastName;
            });
        });
    };
    Object.defineProperty(AppmenuComponent.prototype, "isAdmin", {
        get: function () {
            return this.user && this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_3__["RoleName"].Admin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppmenuComponent.prototype, "isUser", {
        get: function () {
            return this.user && this.user.role === _models_role__WEBPACK_IMPORTED_MODULE_3__["RoleName"].User;
        },
        enumerable: true,
        configurable: true
    });
    AppmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appmenu',
            template: __webpack_require__(/*! ./appmenu.component.html */ "./src/app/appmenu/appmenu.component.html"),
            styles: [__webpack_require__(/*! ./appmenu.component.css */ "./src/app/appmenu/appmenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AppmenuComponent);
    return AppmenuComponent;
}());



/***/ }),

/***/ "./src/app/change-user-password/change-user-password.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/change-user-password/change-user-password.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS11c2VyLXBhc3N3b3JkL2NoYW5nZS11c2VyLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/change-user-password/change-user-password.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/change-user-password/change-user-password.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n      <label for=\"newpassword\">Password</label>\n      <input type=\"text\" formControlName=\"newpassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.newpassword.errors }\" />\n      <div *ngIf=\"submitted && f.newpassword.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.newpassword.errors.required\">newpassword is required</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Confirm Password</label>\n    <input type=\"text\" formControlName=\"confirmPwd\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPwd.errors }\" />\n      <div *ngIf=\"submitted && f.confirmPwd.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.confirmPwd.errors.required\">confirmPwd is required</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\n  </div>\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n</form>\n"

/***/ }),

/***/ "./src/app/change-user-password/change-user-password.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/change-user-password/change-user-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ChangeUserPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUserPasswordComponent", function() { return ChangeUserPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password.validator */ "./src/app/change-user-password/password.validator.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");







var ChangeUserPasswordComponent = /** @class */ (function () {
    function ChangeUserPasswordComponent(formBuilder, route, router, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ChangeUserPasswordComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: _password_validator__WEBPACK_IMPORTED_MODULE_4__["PassWordValidator"].matchPwds
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(ChangeUserPasswordComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.resetForm.controls; },
        enumerable: true,
        configurable: true
    });
    ChangeUserPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.changePassword(this.resetForm.value).then(function (data) {
            if (data != null) {
                if (_this.userService.user.role === _models_role__WEBPACK_IMPORTED_MODULE_6__["RoleName"].Admin) {
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
        });
    };
    ChangeUserPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-user-password',
            template: __webpack_require__(/*! ./change-user-password.component.html */ "./src/app/change-user-password/change-user-password.component.html"),
            styles: [__webpack_require__(/*! ./change-user-password.component.css */ "./src/app/change-user-password/change-user-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], ChangeUserPasswordComponent);
    return ChangeUserPasswordComponent;
}());



/***/ }),

/***/ "./src/app/change-user-password/password.validator.ts":
/*!************************************************************!*\
  !*** ./src/app/change-user-password/password.validator.ts ***!
  \************************************************************/
/*! exports provided: PassWordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassWordValidator", function() { return PassWordValidator; });
var PassWordValidator = /** @class */ (function () {
    function PassWordValidator() {
    }
    PassWordValidator.matchPwds = function (control) {
        var newPwd2 = control.get('newpassword');
        var confirmPwd2 = control.get('confirmPwd');
        if (newPwd2.value !== confirmPwd2.value) {
            return { pwdsDontMatch: true };
        }
        return null;
    };
    return PassWordValidator;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <div class=\"content-header\">\n    <div class=\"container-fluid\">\n      <!-- <div class=\"row mb-2\">\n        <div class=\"col-sm-12\"> -->\n          <!-- <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item active\">LoginPage</li>\n          </ol> -->\n        <!-- </div> /.col -->\n      <!-- </div>/.row -->\n    </div><!-- /.container-fluid -->\n  </div>\n  <!-- /.content-header -->\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <router-outlet></router-outlet>\n    </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.userDisplayName = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userDisplayName = this.userService.user.userName;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edituser/edituser.component.css":
/*!*************************************************!*\
  !*** ./src/app/edituser/edituser.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXR1c2VyL2VkaXR1c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/edituser/edituser.component.html":
/*!**************************************************!*\
  !*** ./src/app/edituser/edituser.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit User</h2>\n<form [formGroup]=\"editUserForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"userName\">Username</label>\n        <input type=\"text\" formControlName=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\n        <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.userName.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <!-- <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>  -->\n    <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"dob\">Date of Birth</label>\n        <input type=\"date\" formControlName=\"dob\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" />\n        <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.dob.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"gender\">Gender</label>\n        <input type=\"text\" formControlName=\"gender\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\" />\n        <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.gender.errors.required\">Password is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Edit</button>\n        <a [routerLink]=\"['/admin']\" class=\"btn btn-link\">Cancel</a>\n      </div>\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      \n</form>\n"

/***/ }),

/***/ "./src/app/edituser/edituser.component.ts":
/*!************************************************!*\
  !*** ./src/app/edituser/edituser.component.ts ***!
  \************************************************/
/*! exports provided: EdituserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdituserComponent", function() { return EdituserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");





var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(formBuilder, router, route, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
    }
    EdituserComponent.prototype.ngOnInit = function () {
        this.user_id = +this.route.snapshot.paramMap.get('id');
        this.editUserForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
            _this.router.navigate(['/admin']);
        }, function (error) {
            _this.loading = false;
        });
    };
    EdituserComponent.prototype.initForm = function () {
        var _this = this;
        this.userService.getUserById(this.user_id).then(function (data) {
            if (data != null) {
                _this.editUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.id),
                    'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.userName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.dob, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.role)
                });
            }
        });
    };
    EdituserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edituser',
            template: __webpack_require__(/*! ./edituser.component.html */ "./src/app/edituser/edituser.component.html"),
            styles: [__webpack_require__(/*! ./edituser.component.css */ "./src/app/edituser/edituser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], EdituserComponent);
    return EdituserComponent;
}());



/***/ }),

/***/ "./src/app/exam/exam.component.css":
/*!*****************************************!*\
  !*** ./src/app/exam/exam.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-right{\r\n    float: right !important;\r\n  }\r\n\r\n.pull-left{\r\n    float: left !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbS9leGFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7RUFDekI7O0FBRUY7SUFDSSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9leGFtL2V4YW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdWxsLXJpZ2h0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLnB1bGwtbGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/exam/exam.component.html":
/*!******************************************!*\
  !*** ./src/app/exam/exam.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create New Exam</h2>\n<br/>\n<form [formGroup]=\"createExamForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Exam title</label>\n    <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.name.errors.required\">title is required</div>\n    </div>\n</div>\n  <div class=\"form-group\">\n    <button [disabled]=\"loading\" class=\"btn btn-primary pull-right\">Submit</button>\n  </div>\n\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n</form>"

/***/ }),

/***/ "./src/app/exam/exam.component.ts":
/*!****************************************!*\
  !*** ./src/app/exam/exam.component.ts ***!
  \****************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/exam.service */ "./src/app/_services/exam.service.ts");






var ExamComponent = /** @class */ (function () {
    function ExamComponent(formBuilder, userService, examService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.examService = examService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    ExamComponent.prototype.ngOnInit = function () {
        this.createExamForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(ExamComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.createExamForm.controls; },
        enumerable: true,
        configurable: true
    });
    ExamComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.createExamForm.invalid) {
            return;
        }
        this.loading = true;
        this.examService.createExam(this.createExamForm.value)
            .then(function (data) {
            _this.router.navigate(['/admin']);
        }, function (error) {
            _this.loading = false;
        });
    };
    ExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exam',
            template: __webpack_require__(/*! ./exam.component.html */ "./src/app/exam/exam.component.html"),
            styles: [__webpack_require__(/*! ./exam.component.css */ "./src/app/exam/exam.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "./src/app/examassign/examassign.component.css":
/*!*****************************************************!*\
  !*** ./src/app/examassign/examassign.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1hc3NpZ24vZXhhbWFzc2lnbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/examassign/examassign.component.html":
/*!******************************************************!*\
  !*** ./src/app/examassign/examassign.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit User</h2>\n<form [formGroup]=\"examassign\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"assignTo\">Exam Assign to </label>\n        <select formControlName=\"assignTo\" class=\"selectpicker dropdown mt-4 ml-3\" id=\"type\" data-live-search=\"true\"\n            (change)=\"selectOption($event.target.value)\" [(ngModel)]=\"selected\">\n            <option *ngFor=\"let user of users$ | async\" [value]=\"user.id\">{{user.userName}}</option>\n        </select>\n        <div *ngIf=\"submitted && f.assignTo.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.assignTo.errors.required\">Exam assign to is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <input type=\"text\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" />\n        <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.description.errors.required\">description is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exam\">Select Exam</label>\n        <select formControlName=\"exam\" class=\"selectpicker dropdown mt-4 ml-3\" id=\"type\" data-live-search=\"true\">\n            <option *ngFor=\"let exam of exams$ | async\" [value]=\"exam.id\">{{exam.name}}</option>\n        </select>\n        <div *ngIf=\"submitted && f.exam.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.exam.errors.required\">exam is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary pull-right\">Next</button>\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n</form>"

/***/ }),

/***/ "./src/app/examassign/examassign.component.ts":
/*!****************************************************!*\
  !*** ./src/app/examassign/examassign.component.ts ***!
  \****************************************************/
/*! exports provided: ExamassignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamassignComponent", function() { return ExamassignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/exam.service */ "./src/app/_services/exam.service.ts");






var ExamassignComponent = /** @class */ (function () {
    function ExamassignComponent(formBuilder, userService, examService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.examService = examService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.selected = 0;
    }
    ExamassignComponent.prototype.selectOption = function (id) {
        //getted from event
        console.log(id);
    };
    ExamassignComponent.prototype.getUsers = function () {
        return this.userService.getusers();
    };
    ExamassignComponent.prototype.getExams = function () {
        return this.examService.getExams();
    };
    ExamassignComponent.prototype.ngOnInit = function () {
        this.examassign = this.formBuilder.group({
            assignTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            exam: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.users$ = this.getUsers();
        this.exams$ = this.getExams();
    };
    Object.defineProperty(ExamassignComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.examassign.controls; },
        enumerable: true,
        configurable: true
    });
    ExamassignComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.examassign.invalid) {
            return;
        }
        this.loading = true;
        this.userService.getUserById(this.users$)
            .then(function (data) {
            // this.router.navigate(['/#']);
            console.log(data);
        }, function (error) {
            _this.loading = false;
        });
        this.examService.examAssign(this.examassign.value)
            .then(function (data) {
            _this.router.navigate(['/#']);
        }, function (error) {
            _this.loading = false;
        });
    };
    ExamassignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examassign',
            template: __webpack_require__(/*! ./examassign.component.html */ "./src/app/examassign/examassign.component.html"),
            styles: [__webpack_require__(/*! ./examassign.component.css */ "./src/app/examassign/examassign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ExamassignComponent);
    return ExamassignComponent;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\" style=\"padding: 50px;\">\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required || f.email.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\n                        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                    </div>\n                    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");





var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
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
        this.authService.forgotpassword(this.resetForm.value)
            .then(function (data) {
            window.confirm('Please check your email!');
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
        });
    };
    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Hi {{userDisplayName}}!</h1>\n<p>You're logged in!!</p> -->\n<app-appheader></app-appheader>\n<app-appmenu></app-appmenu>\n<app-dashboard></app-dashboard>\n<app-appfooter></app-appfooter>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.userService.user.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["RoleName"].Admin) {
            this.router.navigate(['/admin']);
        }
        else {
            this.router.navigate(['/userPage']);
        }
    };
    HomeComponent.prototype.logout = function () {
        sessionStorage.removeItem("loggedUser");
        this.userService.user = null;
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" style=\"padding: 50px;\">\n                    <div class=\"form-group\">\n                        <label for=\"usernameOrEmail\">Username</label>\n                        <input type=\"text\" formControlName=\"usernameOrEmail\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.usernameOrEmail.errors }\" />\n                        <div *ngIf=\"submitted && f.usernameOrEmail.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.usernameOrEmail.errors.required\">Username is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\n                        <a routerLink=\"/forgot\">Forgot Password</a>\n                    </div>\n                    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, userService, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            usernameOrEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
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
        this.authService.login(this.loginForm.value)
            .then(function (data) {
            if (data != null) {
                _this.getUserInfobyLogin(data.accessToken);
            }
        }, function (error) {
            _this.loading = false;
            window.confirm('Password not matched! Please enter correct paasword');
        });
    };
    LoginComponent.prototype.getUserInfobyLogin = function (token) {
        var _this = this;
        this.userService.getUserbyToken(token)
            .then(function (data) {
            if (data != null) {
                if (data.role === _models_role__WEBPACK_IMPORTED_MODULE_6__["RoleName"].Admin) {
                    //set data in session 
                    sessionStorage.setItem('user', JSON.stringify(data));
                    // sessionStorage.setItem('loggedUserRole', data.role.name);
                    _this.router.navigate(['/admin']);
                }
                else {
                    sessionStorage.setItem('user', JSON.stringify(data));
                    // sessionStorage.setItem('loggedUserRole', data.role.name);
                    _this.router.navigate(['/userPage']);
                }
            }
        }, function (error) {
            _this.loading = false;
            window.confirm('Password not matched! Please enter correct paasword');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-login', template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/question/add-questions/add-questions.component.css":
/*!********************************************************************!*\
  !*** ./src/app/question/add-questions/add-questions.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-button {\r\n    margin: 5px !important;\r\n  }\r\n  \r\n  :host ::ng-deep .mat-radio-outer-circle{\r\n    border-style: none;\r\n  }\r\n  \r\n  .pull-right{\r\n    float: right !important;\r\n  }\r\n  \r\n  .pull-left{\r\n    float: left !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vYWRkLXF1ZXN0aW9ucy9hZGQtcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUY7SUFDSSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9hZGQtcXVlc3Rpb25zL2FkZC1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHVsbC1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5wdWxsLWxlZnR7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/question/add-questions/add-questions.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/question/add-questions/add-questions.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form (ngSubmit)=\"onSubmit()\" #selectExamForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"examid\">Select Exam</label>\n    <select class=\"form-control\" id=\"examid\" name=\"examid\" ngModel #examid=\"ngModel\">\n      <option *ngFor=\"let exam of exams$ | async\" [value]=\"exam.id\" \n      ng-selected=\"exam.id == examid\">{{exam.name}}</option>\n    </select>\n    <span class=\"help-block\" *ngIf=\"!examid.valid && examid.touched\">Plase Select a Exam!</span>\n  </div>\n  <div class=\"form-group\">\n    <button [disabled]=\"loading\" class=\"btn btn-primary pull-right\">Next</button>\n  </div>\n\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n</form> -->\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <!-- SELECT2 EXAMPLE -->\n    <div class=\"card card-default\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Selected Exam is : {{selectedExam}}</h3>\n\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\"><i class=\"fas fa-minus\"></i></button>\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"remove\"><i class=\"fas fa-remove\"></i></button>\n        </div>\n      </div>\n      <!-- /.card-header -->\n      <div class=\"card-body\">\n\n        <form [formGroup]=\"createQuetionForm\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"question\">Add Que</label>\n                <input type=\"text\" formControlName=\"question\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\" />\n                <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.question.errors.required\">question is required</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <mat-radio-group class=\"example-radio-group\" formControlName=\"ansCategory\" [(ngModel)]=\"selectedAnsType\">\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let ansType of ansTypes\" [value]=\"ansType\">\n                {{ansType}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n\n          <div class=\"input-container\">\n\n            <div *ngIf=\"selectedAnsType=='Text ans'\">\n              <div class=\"form-group\">\n                <label for=\"correct_ans\">Correct ans</label>\n                <input type=\"correct_ans\" formControlName=\"correct_ans\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.correct_ans.errors }\" />\n                <div *ngIf=\"submitted && f.correct_ans.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.correct_ans.errors.required\">Correct ans is required</div>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"selectedAnsType=='Single select'\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"option1\">Option1</label>\n                    <input type=\"option1\" formControlName=\"option1\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\" />\n                    <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.option1.errors.required\">option1 ans is required</div>\n                    </div>\n                  </div>\n                  <!-- /.form-group -->\n                  <div class=\"form-group\">\n                    <label for=\"option2\">Option2</label>\n                    <input type=\"option2\" formControlName=\"option2\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\" />\n                    <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.option2.errors.required\">option2 ans is required</div>\n                    </div>\n                  </div>\n                  <!-- /.form-group -->\n                  <div class=\"form-group\">\n                    <label for=\"option3\">Option3</label>\n                    <input type=\"option3\" formControlName=\"option3\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\" />\n                    <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.option3.errors.required\">option3 ans is required</div>\n                    </div>\n                  </div>\n                  <!-- /.form-group -->\n                  <div class=\"form-group\">\n                    <label for=\"option4\">Option4</label>\n                    <input type=\"option4\" formControlName=\"option4\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\" />\n                    <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.option4.errors.required\">option4 ans is required</div>\n                    </div>\n                  </div>\n                  <!-- /.form-group -->\n                </div>\n                <!-- /.col -->\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"option1IsAns\">Option1 Is Ans</label><br>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      formControlName=\"option1IsAns\">\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let op1 of booleanValue\" [value]=\"op1\">\n                        {{op1}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                    <div *ngIf=\"submitted && f.option1IsAns.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.option1IsAns.errors.required\">option1IsAns is required</div>\n                    </div>\n                  </div>\n                  <!-- /.form-group -->\n                  <div class=\"form-group\">\n                    <label for=\"option2IsAns\">Option2 Is Ans</label><br>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      formControlName=\"option2IsAns\">\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let op2 of booleanValue\" [value]=\"op2\">\n                        {{op2}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                    <div *ngIf=\"submitted && f.option2IsAns.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.option2IsAns.errors.required\">option2IsAns is required</div>\n                    </div>\n                  </div>\n                  <!-- /.form-group -->\n                  <div class=\"form-group\">\n                    <label for=\"option3IsAns\">Option3 Is Ans</label><br>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      formControlName=\"option3IsAns\">\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let op3 of booleanValue\" [value]=\"op3\">\n                        {{op3}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                    <div *ngIf=\"submitted && f.option3IsAns.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.option3IsAns.errors.required\">option3IsAns is required</div>\n                    </div>\n                  </div>\n                  <!-- /.form-group -->\n                  <div class=\"form-group\">\n                    <label for=\"option4IsAns\">Option4 Is Ans</label><br>\n                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                      formControlName=\"option4IsAns\">\n                      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let op4 of booleanValue\" [value]=\"op4\">\n                        {{op4}}\n                      </mat-radio-button>\n                    </mat-radio-group>\n                    <div *ngIf=\"submitted && f.option4IsAns.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.option4IsAns.errors.required\">option4IsAns is required</div>\n                    </div>\n                  </div>\n                  <!-- /.form-group -->\n                </div>\n                <!-- /.col -->\n              </div>\n              <!-- /.row -->\n            </div>\n\n            <div *ngIf=\"selectedAnsType=='Multi select'\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"option1\">Option1</label>\n                        <input type=\"option1\" formControlName=\"option1\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.option1.errors }\" />\n                        <div *ngIf=\"submitted && f.option1.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.option1.errors.required\">option1 ans is required</div>\n                        </div>\n                      </div>\n                      <!-- /.form-group -->\n                      <div class=\"form-group\">\n                        <label for=\"option2\">Option2</label>\n                        <input type=\"option2\" formControlName=\"option2\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.option2.errors }\" />\n                        <div *ngIf=\"submitted && f.option2.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.option2.errors.required\">option2 ans is required</div>\n                        </div>\n                      </div>\n                      <!-- /.form-group -->\n                      <div class=\"form-group\">\n                        <label for=\"option3\">Option3</label>\n                        <input type=\"option3\" formControlName=\"option3\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.option3.errors }\" />\n                        <div *ngIf=\"submitted && f.option3.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.option3.errors.required\">option3 ans is required</div>\n                        </div>\n                      </div>\n                      <!-- /.form-group -->\n                      <div class=\"form-group\">\n                        <label for=\"option4\">Option4</label>\n                        <input type=\"option4\" formControlName=\"option4\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.option4.errors }\" />\n                        <div *ngIf=\"submitted && f.option4.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.option4.errors.required\">option4 ans is required</div>\n                        </div>\n                      </div>\n                      <!-- /.form-group -->\n                    </div>\n                    <!-- /.col -->\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"option1IsAns\">Option1 Is Ans</label><br>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                          formControlName=\"option1IsAns\">\n                          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let op1 of booleanValue\" [value]=\"op1\">\n                            {{op1}}\n                          </mat-radio-button>\n                        </mat-radio-group>\n                        <div *ngIf=\"submitted && f.option1IsAns.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.option1IsAns.errors.required\">option1IsAns is required</div>\n                        </div>\n                      </div>\n                      <!-- /.form-group -->\n                      <div class=\"form-group\">\n                        <label for=\"option2IsAns\">Option2 Is Ans</label><br>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                          formControlName=\"option2IsAns\">\n                          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let op2 of booleanValue\" [value]=\"op2\">\n                            {{op2}}\n                          </mat-radio-button>\n                        </mat-radio-group>\n                        <div *ngIf=\"submitted && f.option2IsAns.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.option2IsAns.errors.required\">option2IsAns is required</div>\n                        </div>\n                      </div>\n                      <!-- /.form-group -->\n                      <div class=\"form-group\">\n                        <label for=\"option3IsAns\">Option3 Is Ans</label><br>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                          formControlName=\"option3IsAns\">\n                          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let op3 of booleanValue\" [value]=\"op3\">\n                            {{op3}}\n                          </mat-radio-button>\n                        </mat-radio-group>\n                        <div *ngIf=\"submitted && f.option3IsAns.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.option3IsAns.errors.required\">option3IsAns is required</div>\n                        </div>\n                      </div>\n                      <!-- /.form-group -->\n                      <div class=\"form-group\">\n                        <label for=\"option4IsAns\">Option4 Is Ans</label><br>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                          formControlName=\"option4IsAns\">\n                          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let op4 of booleanValue\" [value]=\"op4\">\n                            {{op4}}\n                          </mat-radio-button>\n                        </mat-radio-group>\n                        <div *ngIf=\"submitted && f.option4IsAns.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.option4IsAns.errors.required\">option4IsAns is required</div>\n                        </div>\n                      </div>\n                      <!-- /.form-group -->\n                    </div>\n                    <!-- /.col -->\n                  </div>\n                  <!-- /.row -->\n\n            </div>\n\n          </div>\n\n\n\n          <div class=\"form-group\">\n            <button [disabled]=\"loading\" (click)=\"onFinalSubmit()\" class=\"btn btn-primary pull-right\">Finish</button>\n            <button [disabled]=\"loading\" (click)=\"onSubmit();\" type=\"reset\" create class=\"btn btn-primary pull-right\">Next</button>\n          </div>\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n        </form>\n\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/question/add-questions/add-questions.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/question/add-questions/add-questions.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionsComponent", function() { return AddQuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/question.service */ "./src/app/_services/question.service.ts");
/* harmony import */ var src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/exam.service */ "./src/app/_services/exam.service.ts");






var AddQuestionsComponent = /** @class */ (function () {
    function AddQuestionsComponent(formBuilder, router, questionService, examService, ngZone) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.questionService = questionService;
        this.examService = examService;
        this.ngZone = ngZone;
        this.loading = false;
        this.submitted = false;
        this.booleanValue = ['True', 'False'];
        this.ansTypes = ['Text ans', 'Single select', 'Multi select'];
    }
    AddQuestionsComponent.prototype.getExams = function () {
        return this.examService.getExams();
    };
    AddQuestionsComponent.prototype.ngOnInit = function () {
        this.selectedExam = this.examService.selectedExam.name;
        this.selectedAnsType = this.ansTypes[0];
        this.exams$ = this.getExams();
        this.createQuetionForm = this.formBuilder.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ansCategory: [''],
            correct_ans: [''],
            option1: [''],
            option2: [''],
            option3: [''],
            option4: [''],
            option1IsAns: [''],
            option2IsAns: [''],
            option3IsAns: [''],
            option4IsAns: [''],
        });
    };
    Object.defineProperty(AddQuestionsComponent.prototype, "f", {
        get: function () { return this.createQuetionForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddQuestionsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.createQuetionForm.invalid) {
            return;
        }
        this.loading = true;
        this.questionService.createQuestion(this.createQuetionForm.value)
            .then(function (data) {
            _this.createQuetionForm.reset();
            Object.keys(_this.createQuetionForm.controls).forEach(function (key) {
                _this.createQuetionForm.controls[key].setErrors(null);
            });
            _this.loading = false;
            _this.router.navigateByUrl('/question/add');
        }, function (error) {
            _this.loading = false;
        });
    };
    AddQuestionsComponent.prototype.onFinalSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.createQuetionForm.invalid) {
            return;
        }
        this.loading = true;
        this.questionService.createQuestion(this.createQuetionForm.value)
            .then(function (data) {
            _this.router.navigate(['/admin']);
        }, function (error) {
            _this.loading = false;
        });
    };
    AddQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-questions',
            template: __webpack_require__(/*! ./add-questions.component.html */ "./src/app/question/add-questions/add-questions.component.html"),
            styles: [__webpack_require__(/*! ./add-questions.component.css */ "./src/app/question/add-questions/add-questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"],
            src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AddQuestionsComponent);
    return AddQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-button {\r\n  margin: 5px !important;\r\n}\r\n\r\n:host ::ng-deep .mat-radio-outer-circle{\r\n  border-style: none;\r\n}\r\n\r\n.select2.ng-invalid.ng-touched {\r\n  border: 1px solid red\r\n}\r\n\r\n.pull-right{\r\n  float: right !important;\r\n}\r\n\r\n.pull-left{\r\n  float: left !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uc2VsZWN0Mi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZFxyXG59XHJcblxyXG4ucHVsbC1yaWdodHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB1bGwtbGVmdHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form (ngSubmit)=\"onSubmit()\" #selectExamForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"examid\">Select Exam</label>\n    <select class=\"form-control\" id=\"examid\" name=\"examid\" ngModel #examid=\"ngModel\">\n      <option *ngFor=\"let exam of exams$ | async\" [value]=\"exam.id\" \n      ng-selected=\"exam.id == examid\">{{exam.name}}</option>\n    </select>\n    <span class=\"help-block\" *ngIf=\"!examid.valid && examid.touched\">Plase Select a Exam!</span>\n  </div>\n  <div class=\"form-group\">\n    <button [disabled]=\"loading\" class=\"btn btn-primary pull-right\">Next</button>\n  </div>\n\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n</form> -->\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <!-- SELECT2 EXAMPLE -->\n    <div class=\"card card-default\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Select Exam</h3>\n\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\"><i class=\"fas fa-minus\"></i></button>\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"remove\"><i class=\"fas fa-remove\"></i></button>\n        </div>\n      </div>\n      <!-- /.card-header -->\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <form (ngSubmit)=\"onSubmit()\" #selectExamForm=\"ngForm\">\n              <div class=\"form-group\">\n                <label>Exam</label>\n                <select class=\"form-control select2\" style=\"width: 100%;\" name=\"examid\" ngModel examid #examid=\"ngModel\" required >\n                  <option *ngFor=\"let exam of exams$ | async;\" [value]=\"exam.id\" selected=\"exam.id == examid\"\n                   >{{exam.name}}</option>\n                </select>\n                <span class=\"help-block\" *ngIf=\"!examid.valid && examid.touched\">Plase Select a Exam!</span>\n              </div>\n              <div class=\"form-group\">\n                <button [disabled]=\"!selectExamForm.valid\" class=\"btn btn-primary pull-right\">Next</button>\n              </div>\n              <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n            </form>\n          </div>\n          <!-- /.col -->\n        </div>\n        <!-- /.row -->\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <!-- /.card -->\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/exam.service */ "./src/app/_services/exam.service.ts");





var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(formBuilder, router, examService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.examService = examService;
        this.loading = false;
        this.submitted = false;
        this.booleanValue = ['true', 'false'];
    }
    QuestionComponent.prototype.getExams = function () {
        return this.examService.getExams();
    };
    QuestionComponent.prototype.ngOnInit = function () {
        this.exams$ = this.getExams();
    };
    Object.defineProperty(QuestionComponent.prototype, "f", {
        get: function () { return this.selectExamForm.controls; },
        enumerable: true,
        configurable: true
    });
    QuestionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.selectExamForm.invalid) {
            return;
        }
        this.loading = true;
        this.examService.getExamById(this.selectExamForm.value.examid)
            .then(function (data) {
            _this.examService.selectedExam = data;
            _this.router.navigate(['/question/add']);
        }, function (error) {
            _this.loading = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectExamForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], QuestionComponent.prototype, "selectExamForm", void 0);
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .example-radio-button {\r\n    margin: 5px !important;\r\n  }\r\n  \r\n  :host ::ng-deep .mat-radio-outer-circle{\r\n    border-style: none;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3\">\n                <h2>Register</h2>\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"firstName\">First Name</label>\n                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"lastName\">Last Name</label>\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"userName\">Username</label>\n                        <input type=\"text\" formControlName=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\n                        <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.userName.errors.required\">Username is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"dob\">Date of Birth</label>\n                        <input type=\"date\" formControlName=\"dob\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" />\n                        <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.dob.errors.required\">DOB is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label id=\"example-radio-group-label\">Please selecet Gender  </label>\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n                            formControlName=\"gender\">\n                            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let gender of genders\" [value]=\"gender\">\n                                {{gender}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n                        <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.gender.errors.required\">Gender is required</div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-group\" *ngIf=\"isAdmin;then content else other_content\">\n                        <!-- this is ignored -->\n                    </div>\n\n                    <ng-template #content>\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                        <a [routerLink]=\"['/admin']\" class=\"btn btn-link\">Cancel</a>\n                    </ng-template>\n                    \n                    <ng-template #other_content>\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                    </ng-template>\n\n                    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.genders = ['Male', 'Female'];
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "isAdmin", {
        get: function () {
            return this.userService.user && this.userService.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["RoleName"].Admin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "isUser", {
        get: function () {
            return this.userService.user && this.userService.user.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["RoleName"].User;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.createUser(this.registerForm.value)
            .then(function (data) {
            _this.router.navigate(['/admin']);
        }, function (error) {
            _this.loading = false;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/resetpassword/password.validator.ts":
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/password.validator.ts ***!
  \*****************************************************/
/*! exports provided: PassWordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassWordValidator", function() { return PassWordValidator; });
var PassWordValidator = /** @class */ (function () {
    function PassWordValidator() {
    }
    PassWordValidator.matchPwds = function (control) {
        var newPwd2 = control.get('password');
        var confirmPwd2 = control.get('confirmPwd');
        if (newPwd2.value !== confirmPwd2.value) {
            return { pwdsDontMatch: true };
        }
        return null;
    };
    return PassWordValidator;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.css":
/*!***********************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.html":
/*!************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"text\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.password.errors.required\">password is required</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Confirm Password</label>\n    <input type=\"text\" formControlName=\"confirmPwd\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPwd.errors }\" />\n      <div *ngIf=\"submitted && f.confirmPwd.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.confirmPwd.errors.required\">confirmPwd is required</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\n  </div>\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n</form>\n"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password.validator */ "./src/app/resetpassword/password.validator.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");






var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.token = params['token'];
        });
        this.resetForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            token: [this.token, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: _password_validator__WEBPACK_IMPORTED_MODULE_4__["PassWordValidator"].matchPwds
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
        this.authService.resetpassword(this.resetForm.value).then(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
        });
    };
    ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetpassword.component.html */ "./src/app/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/resetpassword/resetpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/usereditprofile/usereditprofile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/usereditprofile/usereditprofile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJlZGl0cHJvZmlsZS91c2VyZWRpdHByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/usereditprofile/usereditprofile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/usereditprofile/usereditprofile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit User</h2>\n<form [formGroup]=\"profileUserForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"userName\">Username</label>\n        <input type=\"text\" formControlName=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\n        <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.userName.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <!-- <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>  -->\n    <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"dob\">Date of Birth</label>\n        <input type=\"date\" formControlName=\"dob\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" />\n        <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.dob.errors.required\">Dob is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"gender\">Gender</label>\n        <input type=\"text\" formControlName=\"gender\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\" />\n        <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.gender.errors.required\">Gender is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Edit</button>\n        <a [routerLink]=\"['/profile']\" class=\"btn btn-link\">Cancel</a>\n      </div>\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      \n</form>\n"

/***/ }),

/***/ "./src/app/usereditprofile/usereditprofile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/usereditprofile/usereditprofile.component.ts ***!
  \**************************************************************/
/*! exports provided: UsereditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsereditprofileComponent", function() { return UsereditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/role */ "./src/app/_models/role.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var UsereditprofileComponent = /** @class */ (function () {
    function UsereditprofileComponent(formBuilder, router, userService, location, route) {
        // code for refresh side menu..........
        // this.router.routeReuseStrategy.shouldReuseRoute = function(){
        //     return false;
        //   };
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.location = location;
        this.route = route;
        this.loading = false;
        this.submitted = false;
    }
    UsereditprofileComponent.prototype.ngOnInit = function () {
        this.profileUserForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.initForm();
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })).subscribe(function () {
        });
    };
    Object.defineProperty(UsereditprofileComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.profileUserForm.controls; },
        enumerable: true,
        configurable: true
    });
    UsereditprofileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.profileUserForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.updateProfile(this.profileUserForm.value)
            .then(function (data) {
            if (data.role === _models_role__WEBPACK_IMPORTED_MODULE_5__["RoleName"].Admin) {
                _this.router.navigateByUrl('/menu', { skipLocationChange: false }).then(function () {
                    _this.router.navigate(['/admin']);
                });
            }
            else {
                _this.router.navigateByUrl('/menu', { skipLocationChange: true }).then(function () {
                    _this.router.navigate(['/']);
                });
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    UsereditprofileComponent.prototype.initForm = function () {
        var firstName = '';
        var lastName = '';
        var userName = '';
        var email = '';
        var gender = '';
        var dob;
        var id;
        var role = '';
        var user = this.userService.user;
        id = user.id;
        firstName = user.firstName;
        lastName = user.lastName;
        userName = user.userName;
        email = user.email;
        gender = user.gender;
        dob = user.dob;
        role = user.role;
        this.profileUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](id),
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](userName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](gender, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](dob, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](role)
        });
    };
    UsereditprofileComponent.prototype.deactivate = function () {
        this.router = null;
    };
    UsereditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usereditprofile',
            template: __webpack_require__(/*! ./usereditprofile.component.html */ "./src/app/usereditprofile/usereditprofile.component.html"),
            styles: [__webpack_require__(/*! ./usereditprofile.component.css */ "./src/app/usereditprofile/usereditprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UsereditprofileComponent);
    return UsereditprofileComponent;
}());



/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpage/userpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwYWdlL3VzZXJwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/userpage/userpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{userDisplayName}}!</h1>\n<p>You're logged in!!</p>"

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/userpage/userpage.component.ts ***!
  \************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(userService) {
        this.userService = userService;
        this.userDisplayName = '';
    }
    UserpageComponent.prototype.ngOnInit = function () {
        this.userDisplayName = this.userService.user.userName;
    };
    UserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userpage',
            template: __webpack_require__(/*! ./userpage.component.html */ "./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__(/*! ./userpage.component.css */ "./src/app/userpage/userpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserpageComponent);
    return UserpageComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-right{\r\n    float: right !important;\r\n  }\r\n\r\n.pull-left{\r\n    float: left !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVsbC1yaWdodHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5wdWxsLWxlZnR7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n            <a [routerLink]=\"['/editprofile']\"\n            class=\"btn btn-sm btn-outline-secondary action-btn pull-right\">\n            <i class=\"fa fa-edit\"></i> Edit Profile Settings\n          </a>\n          <img  class=\"user-img\" />\n          <h4>User     : {{user.userName }}</h4>\n          <p>First Name: {{user.firstName}}</p>\n          <p>Last Name : {{user.lastName}}</p>\n          <p>Email     : {{user.email}}</p>\n           \n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userService.user != null) {
            this.user = this.userService.user;
        }
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.router = null;
            }
        });
    };
    Object.defineProperty(UserprofileComponent.prototype, "isUser", {
        get: function () {
            return this.user = this.userService.user;
        },
        enumerable: true,
        configurable: true
    });
    UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\git\ExamPortalFE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map