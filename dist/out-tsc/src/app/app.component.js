import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { UserService } from './_services/user.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.currentUser = new User();
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
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            UserService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map