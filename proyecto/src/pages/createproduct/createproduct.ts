import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Createproduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-createproduct',
  templateUrl: 'createproduct.html'
})
export class CreateproductPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CreateproductPage Page');
  }

}
