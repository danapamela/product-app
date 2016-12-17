import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotpassswordPage } from '../forgotpasssword/forgotpasssword';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { OptionsPage } from '../../pages/options/options';
import { CustomValidators } from '../../validators/validator';
import { ProductService } from '../../providers/product.service';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class LoginPage {

  todo: FormGroup;
  user: User;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public userService: UserService) {


    this.todo = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidators.emailValidator])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

  }

  navToHomePage() {
    console.log(this.todo);
    this.user = new User();
    this.user.email = this.todo.value.email;
    this.user.password = this.todo.value.password;
    console.log(this.user);
    this.signIn();
  }

  navToForgotpassswordPage() {
    this.navCtrl.push(ForgotpassswordPage);
  }

  signIn() {
    this.userService.signIn(this.user)
      .subscribe(
      products => {
        this.navCtrl.setRoot(HomePage);
      },
      error => {
        console.log(error);
      }
      );


  }
}