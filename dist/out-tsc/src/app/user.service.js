import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
var UserService = /** @class */ (function () {
    function UserService(afAuth) {
        this.afAuth = afAuth;
    }
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.getUsername = function () {
        return this.user.username;
    };
    UserService.prototype.reAuth = function (username, password) {
        return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username + '@codedamn.com', password));
    };
    UserService.prototype.updatePassword = function (newpassword) {
        return this.afAuth.auth.currentUser.updatePassword(newpassword);
    };
    UserService.prototype.updateEmail = function (newemail) {
        return this.afAuth.auth.currentUser.updateEmail(newemail + '@codedamn.com');
    };
    UserService.prototype.isAuthenticated = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.user)
                            return [2 /*return*/, true];
                        return [4 /*yield*/, this.afAuth.authState.pipe(first()).toPromise()];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            this.setUser({
                                username: user.email.split('@')[0],
                                uid: user.uid
                            });
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    UserService.prototype.getUID = function () {
        return this.user.uid;
    };
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map