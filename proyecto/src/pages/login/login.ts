import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotpassswordPage } from '../forgotpasssword/forgotpasssword';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

 })
export class LoginPage {

  todo: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

      this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  navToHomePage() {
  	this.navCtrl.setRoot(HomePage);
  }

    navToForgotpassswordPage() {
  	this.navCtrl.setRoot(ForgotpassswordPage);
  }

  ionViewLoaded() {
  
  }
  logForm(){
    console.log(this.todo.value)
  }

  
}
