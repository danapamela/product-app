import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { TermsPage } from '../terms/terms'




@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

	user: User = new User();

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
   this.user.firstname = "nombre";

  }

 presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '¡Hola!' + this.user.firstname,
      message: 'Confirma y Bienvenido',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
              this.navCtrl.setRoot(HomePage);
            
          }
        }
      ]
    });
    alert.present();
  }

    navToTermsPage() {
  	this.navCtrl.push(TermsPage);
  }

}
