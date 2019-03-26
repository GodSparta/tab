import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, alert, router, user, afstore, navCtrl) {
        this.afAuth = afAuth;
        this.alert = alert;
        this.router = router;
        this.user = user;
        this.afstore = afstore;
        this.navCtrl = navCtrl;
        this.username = "";
        this.password = "";
        this.cpassword = "";
    }
    RegisterPage.prototype.pushIngresarNavCtrl = function () {
        this.navCtrl.navigateForward('/login');
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.presentAlert = function (title, content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: title,
                            message: content,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.register = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, username, password, cpassword, res, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, username = _a.username, password = _a.password, cpassword = _a.cpassword;
                        if (password !== cpassword) {
                            this.presentAlert("Error!", "Las contraseñas no son iguales");
                            return [2 /*return*/, console.error("Passwords don't match")];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password)];
                    case 2:
                        res = _b.sent();
                        this.afstore.doc("users/" + res.user.uid).set({
                            username: username
                        });
                        this.user.setUser({
                            username: username,
                            uid: res.user.uid
                        });
                        this.presentAlert("Registro Exitoso", "¡Bienvenido!");
                        this.router.navigate(['/tabs/feed']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.dir(error_1);
                        this.presentAlert("Error", error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            AlertController,
            Router,
            UserService,
            AngularFirestore,
            NavController])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map