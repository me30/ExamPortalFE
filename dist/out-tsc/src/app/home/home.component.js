import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.userService.user.userName == "admin" && this.userService.user.password == "admin") {
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
    HomeComponent = tslib_1.__decorate([
        Component({ templateUrl: 'home.component.html' }),
        tslib_1.__metadata("design:paramtypes", [Router,
            UserService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map