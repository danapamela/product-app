import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the Forgotpasssword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
              this.navCtrl.setRoot(LoginPage);
            
          }
        }
      ]
    });
    alert.present();
  }


}
