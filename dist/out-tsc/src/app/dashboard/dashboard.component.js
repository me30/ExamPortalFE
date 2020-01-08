import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.userDisplayName = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userDisplayName = this.userService.user.userName;
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map