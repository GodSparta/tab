import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { TabsRoutingModule } from './tabs.router.module'

const routes: Routes = [
  {
      path: '',
      component: TabsPage,
      children: [
          { path: 'feed', 
          loadChildren: '../tab1/tab1.module#FeedPageModule'},
          { path: 'adopt',
           loadChildren: '../tab2/tab2.module#AdoptPageModule'},
          { path: 'rescue',
           loadChildren: '../tab3/tab3.module#RescuePageModule'},
      ]
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
