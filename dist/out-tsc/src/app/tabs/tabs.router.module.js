import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';
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
            { path: 'post/:id', loadChildren: '../post/post.module#PostPageModule' },
            { path: 'edit-profile', loadChildren: '../edit-profile/edit-profile.module#EditProfilePageModule' },
        ]
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());
export { TabsRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map