import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotpassswordPage } from '../forgotpasssword/forgotpasssword';
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { User } from '../../models/user';
import { OptionsPage } from '../../pages/options/options';
import { TermsPage } from '../../pages/terms/terms';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

	user: User = new User();
  todo: FormGroup;  

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private formBuilder: FormBuilder,) {
     this.user.firstname = "nombre";

    this.todo = this.formBuilder.group({
      email: [''],
      password: [''],
    });     
  }

 presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '¡Hola! tu correo es' + this.todo.value.email,
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


  navToHomePage() {
    console.log(this.todo);
    this.user = new User();
    this.user.email = this.todo.value.email;
    this.user.password = this.todo.value.password;
    console.log(this.user);
    this.presentConfirm();
    
  }

  signUp() {
    
  }  

}
