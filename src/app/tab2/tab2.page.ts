import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class AdoptPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  pushPerfilNavCtrl(){
    this.navCtrl.navigateForward('/profile');
  }
  pushConfigNavCtrl(){
    this.navCtrl.navigateForward('/config');
  }
  pushPublicarNavCtrl(){
    this.navCtrl.navigateForward('/uploader');
  }

  ngOnInit() {
  }

}