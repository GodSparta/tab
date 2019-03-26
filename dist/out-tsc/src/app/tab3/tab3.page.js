import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var RescuePage = /** @class */ (function () {
    function RescuePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RescuePage.prototype.pushPerfilNavCtrl = function () {
        this.navCtrl.navigateForward('/profile');
    };
    RescuePage.prototype.pushConfigNavCtrl = function () {
        this.navCtrl.navigateForward('/config');
    };
    RescuePage.prototype.pushPublicarNavCtrl = function () {
        this.navCtrl.navigateForward('/uploader');
    };
    RescuePage.prototype.ngOnInit = function () {
    };
    RescuePage = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: './tab3.page.html',
            styleUrls: ['./tab3.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], RescuePage);
    return RescuePage;
}());
export { RescuePage };
//# sourceMappingURL=tab3.page.js.map