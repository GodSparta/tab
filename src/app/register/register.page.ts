import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

import { AngularFirestore } from '@angular/fire/firestore';



import { AlertController, NavController } from '@ionic/angular'


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    username: string=""
    password: string=""
    cpassword: string=""
    constructor(
      public afAuth: AngularFireAuth,
      public alert: AlertController,
      public router: Router,
      public user: UserService,
      public afstore: AngularFirestore,
      public navCtrl: NavController
      ) { }

    pushIngresarNavCtrl(){
      this.navCtrl.navigateForward('/login');
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

    async register(){
      const { username, password, cpassword} = this
      if(password !== cpassword){
        this.presentAlert("Error!","Las contraseñas no son iguales")
        return console.error("Passwords don't match")
      }
      
      try {
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password)
       
       

       this.afstore.doc(`users/${res.user.uid}`).set({
        username
      })
       
       this.user.setUser({
          username,
          uid:res.user.uid
        })
        
        this.presentAlert("Registro Exitoso","¡Bienvenido!")
        this.router.navigate(['/tabs/feed'])
             
          
      } catch(error) {
        console.dir(error)
        this.presentAlert("Error",error.message)
      }
    }
      

}