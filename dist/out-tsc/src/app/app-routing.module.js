import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
var routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthService] },
    { path: 'tab1', loadChildren: './tab1/tab1.module#FeedPageModule' },
    { path: 'tab2', loadChildren: './tab2/tab2.module#AdoptPageModule' },
    { path: 'tab3', loadChildren: './tab3/tab3.module#RescuePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'uploader', loadChildren: './uploader/uploader.module#UploaderPageModule' },
    { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map