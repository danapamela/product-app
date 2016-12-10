import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ForgotpassswordPage } from '../forgotpasssword/forgotpasssword';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../providers/user.service';
import { OptionsPage } from '../../pages/options/options';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class LoginPage {

  todo: FormGroup;
  user: User;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public userService: UserService) {


    this.todo = this.formBuilder.group({
      email: [''],
      password: [''],
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
      user => {
        console.log(user);
        if(user.id){
          this.user = user;  
          this.navCtrl.setRoot(HomePage); 
        }else{
          this.navCtrl.setRoot(OptionsPage); 
        }
      },
      error => {
        console.log(error);
      }
      );
  }

}
