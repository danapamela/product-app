import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotpassswordPage } from '../forgotpasssword/forgotpasssword';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

 })
export class LoginPage {

  todo: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

      this.todo = this.formBuilder.group({
      email: [''],
      password: [''],
    });

  }

  navToHomePage() {
  	this.navCtrl.setRoot(HomePage);
  }

    navToForgotpassswordPage() {
  	this.navCtrl.push(ForgotpassswordPage);
  }
  
}
