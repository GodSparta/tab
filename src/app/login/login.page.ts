import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string =""
  password: string =""
  constructor(public afAuth: AngularFireAuth,
     public user: UserService,
      public router: Router,
      public alert: AlertController,
      public navCtrl: NavController
      ) { }

      pushRegisterNavCtrl(){
        this.navCtrl.navigateForward('/register');
      }

  ngOnInit() {
  }
  async presentAlert(title: string, content: string) {
    const alert = await this.alert.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  async login(){
    const { username, password} = this
    try{
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com',password)

        if(res.user){
          this.user.setUser({
            username,
            uid:res.user.uid
          })
          this.presentAlert("Ingreso Exitoso","Bienvenido de vuelta")
          this.router.navigate(['/tabs/feed'])
        }

        

    }catch(err) {
      console.dir(err)
      if(err.code == "auth/user-not-found"){
        console.log("User not found")
        this.presentAlert("Error!","Usuario no encontrado")
      }
    }
  }

}
