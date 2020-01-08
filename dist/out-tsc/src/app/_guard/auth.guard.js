import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = [];
    }
    AuthGuard.prototype.canActivate = function () {
        //get user via userService (set user in loginservice)
        var currentUser = this.userService.user;
        // get user via session 
        // const currentUser =   sessionStorage.getItem('loggedUser');
        if (currentUser) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
            return false;
        }
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [Router,
            UserService])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map