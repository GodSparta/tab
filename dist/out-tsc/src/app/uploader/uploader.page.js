import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
var UploaderPage = /** @class */ (function () {
    function UploaderPage(http, afstore, user, alertController, router) {
        this.http = http;
        this.afstore = afstore;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.busy = false;
    }
    UploaderPage.prototype.ngOnInit = function () {
    };
    UploaderPage.prototype.createPost = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var image, desc, alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.busy = true;
                        image = this.imageURL;
                        desc = this.desc;
                        this.afstore.doc("users/" + this.user.getUID()).update({
                            posts: firestore.FieldValue.arrayUnion(image)
                        });
                        this.afstore.doc("posts/" + image).set({
                            desc: desc,
                            author: this.user.getUsername(),
                            likes: []
                        });
                        this.busy = false;
                        this.imageURL = "";
                        this.desc = "";
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Hecho',
                                message: 'Contenido pulicado!',
                                buttons: ['Ok!']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.router.navigate(['/tabs/feed']);
                        return [2 /*return*/];
                }
            });
        });
    };
    UploaderPage.prototype.uploadFile = function () {
        this.fileButton.nativeElement.click();
    };
    UploaderPage.prototype.fileChanged = function (event) {
        var _this = this;
        this.busy = true;
        var files = event.target.files;
        /// console.log(files)
        var data = new FormData();
        data.append('file', files[0]);
        data.append('UPLOADCARE_STORE', '1');
        data.append('UPLOADCARE_PUB_KEY', '0085aafc58211b89fc17');
        this.http.post('https://upload.uploadcare.com/base/', data)
            .subscribe(function (event) {
            console.log(event);
            _this.imageURL = event.json().file;
            _this.busy = false;
        });
    };
    tslib_1.__decorate([
        ViewChild('fileButton'),
        tslib_1.__metadata("design:type", Object)
    ], UploaderPage.prototype, "fileButton", void 0);
    UploaderPage = tslib_1.__decorate([
        Component({
            selector: 'app-uploader',
            templateUrl: './uploader.page.html',
            styleUrls: ['./uploader.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Http,
            AngularFirestore,
            UserService,
            AlertController,
            Router])
    ], UploaderPage);
    return UploaderPage;
}());
export { UploaderPage };
//# sourceMappingURL=uploader.page.js.map