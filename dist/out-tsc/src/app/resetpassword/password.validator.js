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
export { PassWordValidator };
//# sourceMappingURL=password.validator.js.map