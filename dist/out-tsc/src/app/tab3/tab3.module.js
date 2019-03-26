import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RescuePage } from './tab3.page';
var routes = [
    {
        path: '',
        component: RescuePage
    }
];
var RescuePageModule = /** @class */ (function () {
    function RescuePageModule() {
    }
    RescuePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RescuePage]
        })
    ], RescuePageModule);
    return RescuePageModule;
}());
export { RescuePageModule };
//# sourceMappingURL=tab3.module.js.map