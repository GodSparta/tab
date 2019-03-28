import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireFunctions } from '@angular/fire/functions';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class FeedPage implements OnInit {

  posts
  sub
  constructor(private navCtrl: NavController,
    private aff: AngularFireFunctions) { }

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
    const getFeed = this.aff.httpsCallable('getFeed')
   this.sub = getFeed({}).subscribe(data =>{
     this.posts = data
   })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
