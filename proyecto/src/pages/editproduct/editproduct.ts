import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Editproduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html'
})
export class EditproductPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EditproductPage Page');
  }

}
