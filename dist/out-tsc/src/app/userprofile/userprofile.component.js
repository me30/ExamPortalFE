import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(userService) {
        this.userService = userService;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        if (this.userService.user != null) {
            this.user = this.userService.user;
        }
    };
    Object.defineProperty(UserprofileComponent.prototype, "isUser", {
        get: function () {
            return this.user = this.userService.user;
        },
        enumerable: true,
        configurable: true
    });
    UserprofileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-userprofile',
            templateUrl: './userprofile.component.html',
            styleUrls: ['./userprofile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], UserprofileComponent);
    return UserprofileComponent;
}());
export { UserprofileComponent };
//# sourceMappingURL=userprofile.component.js.map