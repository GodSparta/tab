import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
var PostPage = /** @class */ (function () {
    function PostPage(route, afs, user) {
        this.route = route;
        this.afs = afs;
        this.user = user;
        this.heartType = "heart-empty";
    }
    PostPage.prototype.ngOnInit = function () {
        var _this = this;
        this.postID = this.route.snapshot.paramMap.get('id');
        this.postReference = this.afs.doc("posts/" + this.postID);
        this.sub = this.postReference.valueChanges().subscribe(function (val) {
            _this.post = val;
            _this.heartType = val.likes.includes(_this.user.getUID()) ? 'heart' : 'heart-empty';
        });
    };
    PostPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostPage.prototype.toggleHeart = function () {
        if (this.heartType == 'heart-empty') {
            this.postReference.update({
                likes: firestore.FieldValue.arrayUnion(this.user.getUID())
            });
        }
        else {
            this.postReference.update({
                likes: firestore.FieldValue.arrayRemove(this.user.getUID())
            });
        }
    };
    PostPage = tslib_1.__decorate([
        Component({
            selector: 'app-post',
            templateUrl: './post.page.html',
            styleUrls: ['./post.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            AngularFirestore,
            UserService])
    ], PostPage);
    return PostPage;
}());
export { PostPage };
//# sourceMappingURL=post.page.js.map