import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(http, afs, alertController, user, router) {
        var _this = this;
        this.http = http;
        this.afs = afs;
        this.alertController = alertController;
        this.user = user;
        this.router = router;
        this.busy = false;
        this.mainuser = afs.doc("users/" + user.getUID());
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
            _this.username = event.username;
            _this.profilePic = event.profilePic;
        });
    }
    EditProfilePage.prototype.ngOnInit = function () {
    };
    EditProfilePage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditProfilePage.prototype.updateProfilePic = function () {
        this.fileBtn.nativeElement.click();
    };
    EditProfilePage.prototype.uploadPic = function (event) {
        var _this = this;
        var files = event.target.files;
        /// console.log(files)
        var data = new FormData();
        data.append('file', files[0]);
        data.append('UPLOADCARE_STORE', '1');
        data.append('UPLOADCARE_PUB_KEY', '0085aafc58211b89fc17');
        this.http.post('https://upload.uploadcare.com/base/', data)
            .subscribe(function (event) {
            var uuid = event.json().file;
            _this.mainuser.update({
                profilePic: uuid
            });
        });
    };
    EditProfilePage.prototype.presentAlert = function (title, content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
    EditProfilePage.prototype.updateDetails = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.busy = true;
                        if (!this.password) {
                            this.busy = false;
                            return [2 /*return*/, this.presentAlert('Error!', 'Tienes que ingresar una contraseña')];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.user.reAuth(this.user.getUsername(), this.password)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.busy = false;
                        return [2 /*return*/, this.presentAlert('Error!', 'Contraseña Incorrecta!')];
                    case 4:
                        if (!this.newpassword) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.user.updatePassword(this.newpassword)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!(this.username !== this.user.getUsername())) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.user.updateEmail(this.username)];
                    case 7:
                        _a.sent();
                        this.mainuser.update({
                            username: this.username
                        });
                        _a.label = 8;
                    case 8:
                        this.password = "";
                        this.newpassword = "";
                        this.busy = false;
                        return [4 /*yield*/, this.presentAlert('Hecho!', 'Tu perfil ha sido actualizado con exito!')];
                    case 9:
                        _a.sent();
                        this.router.navigate(['/tabs/feed']);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        ViewChild('fileBtn'),
        tslib_1.__metadata("design:type", Object)
    ], EditProfilePage.prototype, "fileBtn", void 0);
    EditProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-edit-profile',
            templateUrl: './edit-profile.page.html',
            styleUrls: ['./edit-profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Http,
            AngularFirestore,
            AlertController,
            UserService,
            Router])
    ], EditProfilePage);
    return EditProfilePage;
}());
export { EditProfilePage };
//# sourceMappingURL=edit-profile.page.js.map