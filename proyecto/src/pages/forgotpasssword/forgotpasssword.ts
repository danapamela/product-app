import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-forgotpasssword',
  templateUrl: 'forgotpasssword.html'
})
export class ForgotpassswordPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {}

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Contraseña',
      message: 'Confirmar Cambio de Contraseña',
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
              this.navCtrl.push(LoginPage);
            
          }
        }
      ]
    });
    alert.present();
  }


}
