import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Signoff page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signoff',
  templateUrl: 'signoff.html'
})
export class SignoffPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SignoffPage Page');
  }

}
