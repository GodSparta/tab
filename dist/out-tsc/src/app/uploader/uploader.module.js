import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UploaderPage } from './uploader.page';
import { ShareModule } from '../share.module';
var routes = [
    {
        path: '',
        component: UploaderPage
    }
];
var UploaderPageModule = /** @class */ (function () {
    function UploaderPageModule() {
    }
    UploaderPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ShareModule
            ],
            declarations: [UploaderPage]
        })
    ], UploaderPageModule);
    return UploaderPageModule;
}());
export { UploaderPageModule };
//# sourceMappingURL=uploader.module.js.map