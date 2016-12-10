import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmforgotpasswordPage } from '../confirmforgotpassword/confirmforgotpassword';

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

  constructor(public navCtrl: NavController) {}

    navToConfirmforgotpasswordPage() {
  	this.navCtrl.setRoot(ConfirmforgotpasswordPage);
  }


}
