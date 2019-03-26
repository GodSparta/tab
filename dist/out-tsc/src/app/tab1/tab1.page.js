import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FeedPage.prototype.pushPerfilNavCtrl = function () {
        this.navCtrl.navigateForward('/profile');
    };
    FeedPage.prototype.pushConfigNavCtrl = function () {
        this.navCtrl.navigateForward('/config');
    };
    FeedPage.prototype.pushPublicarNavCtrl = function () {
        this.navCtrl.navigateForward('/uploader');
    };
    FeedPage.prototype.ngOnInit = function () {
    };
    FeedPage = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: './tab1.page.html',
            styleUrls: ['./tab1.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], FeedPage);
    return FeedPage;
}());
export { FeedPage };
//# sourceMappingURL=tab1.page.js.map