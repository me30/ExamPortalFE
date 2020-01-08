import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
var AppheaderComponent = /** @class */ (function () {
    function AppheaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AppheaderComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AppheaderComponent.prototype, "isAdmin", {
        get: function () {
            return this.userService.user && this.userService.user.role.name === "Admin";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppheaderComponent.prototype, "isUser", {
        get: function () {
            return this.userService.user && this.userService.user.role.name === "user";
        },
        enumerable: true,
        configurable: true
    });
    AppheaderComponent.prototype.logout = function () {
        sessionStorage.removeItem("loggedUser");
        this.userService.user = null;
        this.router.navigate(['/login']);
    };
    AppheaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-appheader',
            templateUrl: './appheader.component.html',
            styleUrls: ['./appheader.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            UserService])
    ], AppheaderComponent);
    return AppheaderComponent;
}());
export { AppheaderComponent };
//# sourceMappingURL=appheader.component.js.map