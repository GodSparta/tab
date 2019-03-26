import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
var AuthService = /** @class */ (function () {
    function AuthService(router, user) {
        this.router = router;
        this.user = user;
    }
    AuthService.prototype.canActivate = function (router) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.user.isAuthenticated()];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, true];
                        }
                        this.router.navigate(['/login']);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router, UserService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map