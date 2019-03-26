import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var AdoptPage = /** @class */ (function () {
    function AdoptPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AdoptPage.prototype.pushPerfilNavCtrl = function () {
        this.navCtrl.navigateForward('/profile');
    };
    AdoptPage.prototype.pushConfigNavCtrl = function () {
        this.navCtrl.navigateForward('/config');
    };
    AdoptPage.prototype.pushPublicarNavCtrl = function () {
        this.navCtrl.navigateForward('/uploader');
    };
    AdoptPage.prototype.ngOnInit = function () {
    };
    AdoptPage = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], AdoptPage);
    return AdoptPage;
}());
export { AdoptPage };
//# sourceMappingURL=tab2.page.js.map