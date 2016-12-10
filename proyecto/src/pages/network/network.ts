import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from 'ionic-native';

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
