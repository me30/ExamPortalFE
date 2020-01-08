import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(userService) {
        this.userService = userService;
        this.userDisplayName = '';
    }
    UserpageComponent.prototype.ngOnInit = function () {
        this.userDisplayName = this.userService.user.userName;
    };
    UserpageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-userpage',
            templateUrl: './userpage.component.html',
            styleUrls: ['./userpage.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], UserpageComponent);
    return UserpageComponent;
}());
export { UserpageComponent };
//# sourceMappingURL=userpage.component.js.map