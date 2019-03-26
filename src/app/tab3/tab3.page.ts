import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class RescuePage implements OnInit {

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
