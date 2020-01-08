import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getusers().then(function (users) {
            _this.users = users;
        });
    };
    AdminComponent = tslib_1.__decorate([
        Component({ templateUrl: 'admin.component.html' }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], AdminComponent);
    return AdminComponent;
}());
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map