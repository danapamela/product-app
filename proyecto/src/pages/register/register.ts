import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotpassswordPage } from '../forgotpasssword/forgotpasssword';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { OptionsPage } from '../../pages/options/options';
import { TermsPage } from '../../pages/terms/terms';
import { CustomValidators } from '../../validators/validator';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user: User = new User();
  todo: FormGroup;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private formBuilder: FormBuilder, public userService: UserService) {
    this.todo = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(6), ])],
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(3), ])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(3), ])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10), ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), ])],
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
    this.user.firstname = this.todo.value.firstname;
    this.user.lastname = this.todo.value.lastname;
    this.user.phone = this.todo.value.phone;
    console.log(this.user);
    this.presentConfirm();

  }

  signUp() {
    this.userService.signUp(this.user)
      .subscribe(
      user => {
        this.navCtrl.setRoot(HomePage, {idUser: user.id});
      },
      error => {
        console.log(error);
      }
      );
  }

}
