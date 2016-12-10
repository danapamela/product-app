import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OptionsPage } from '../options/options';


@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage {

  constructor(public navCtrl: NavController) {}

    navToRegisterPage() {
  	this.navCtrl.push(OptionsPage);
  }

}
