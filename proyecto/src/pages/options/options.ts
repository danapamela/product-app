import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';;
import { Network } from 'ionic-native';


@Component({
  selector: 'page-options',
  templateUrl: 'options.html'
})
export class OptionsPage {

  public network: string;

  constructor(public navCtrl: NavController) {}

  navToLoginPage() {
  	this.navCtrl.push(LoginPage);
  }

  navToRegisterPage() {
  	this.navCtrl.push(RegisterPage);
  }

}


