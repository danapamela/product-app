import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Profiledetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profiledetail',
  templateUrl: 'profiledetail.html'
})
export class ProfiledetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProfiledetailPage Page');
  }

}
