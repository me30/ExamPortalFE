import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
var AppmenuComponent = /** @class */ (function () {
    function AppmenuComponent(userService) {
        this.userService = userService;
    }
    AppmenuComponent.prototype.ngOnInit = function () {
        if (this.userService.user != null) {
            this.user = this.userService.user;
        }
    };
    Object.defineProperty(AppmenuComponent.prototype, "isAdmin", {
        get: function () {
            return this.userService.user && this.userService.user.role.name === "Admin";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppmenuComponent.prototype, "isUser", {
        get: function () {
            return this.userService.user && this.userService.user.role.name === "user";
        },
        enumerable: true,
        configurable: true
    });
    AppmenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-appmenu',
            templateUrl: './appmenu.component.html',
            styleUrls: ['./appmenu.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], AppmenuComponent);
    return AppmenuComponent;
}());
export { AppmenuComponent };
//# sourceMappingURL=appmenu.component.js.map