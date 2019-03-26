import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaginaPage } from './pagina.page';
var routes = [
    {
        path: '',
        component: PaginaPage
    }
];
var PaginaPageModule = /** @class */ (function () {
    function PaginaPageModule() {
    }
    PaginaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PaginaPage]
        })
    ], PaginaPageModule);
    return PaginaPageModule;
}());
export { PaginaPageModule };
//# sourceMappingURL=pagina.module.js.map