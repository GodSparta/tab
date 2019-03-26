import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class FeedPage implements OnInit {

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
