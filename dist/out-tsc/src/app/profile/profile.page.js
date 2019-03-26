import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, afs, user, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afs = afs;
        this.user = user;
        this.router = router;
        this.mainuser = afs.doc("users/" + user.getUID());
        this.sub = this.mainuser.valueChanges().subscribe(function (event) {
            _this.posts = event.posts;
            _this.username = event.username;
            _this.profilePic = event.profilePic;
        });
    }
    ProfilePage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProfilePage.prototype.pushConfigNavCtrl = function () {
        this.navCtrl.navigateForward('/config');
    };
    ProfilePage.prototype.goTo = function (postID) {
        this.router.navigate(['/tabs/post/' + postID]);
    };
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AngularFirestore,
            UserService,
            Router])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map