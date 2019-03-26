import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/loading.component';
var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
            ],
            declarations: [LoadingComponent],
            exports: [LoadingComponent]
        })
    ], ShareModule);
    return ShareModule;
}());
export { ShareModule };
//# sourceMappingURL=share.module.js.map