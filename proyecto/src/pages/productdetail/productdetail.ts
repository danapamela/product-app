import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Productdetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-productdetail',
  templateUrl: 'productdetail.html'
})
export class ProductdetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProductdetailPage Page');
  }

}
