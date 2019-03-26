import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AdoptPage } from './tab2.page';
var routes = [
    {
        path: '',
        component: AdoptPage
    }
];
var AdoptPageModule = /** @class */ (function () {
    function AdoptPageModule() {
    }
    AdoptPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AdoptPage]
        })
    ], AdoptPageModule);
    return AdoptPageModule;
}());
export { AdoptPageModule };
//# sourceMappingURL=tab2.module.js.map