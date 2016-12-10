import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Network page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-network',
  templateUrl: 'network.html'
})
export class NetworkPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NetworkPage Page');
  }

}
