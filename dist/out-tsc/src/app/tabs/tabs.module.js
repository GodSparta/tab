import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
import { TabsRoutingModule } from './tabs.router.module';
var routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            { path: 'feed',
                loadChildren: '../tab1/tab1.module#FeedPageModule' },
            { path: 'adopt',
                loadChildren: '../tab2/tab2.module#AdoptPageModule' },
            { path: 'rescue',
                loadChildren: '../tab3/tab3.module#RescuePageModule' },
        ]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                TabsRoutingModule
            ],
            declarations: [TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map