import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html'
})
export class EditproductPage {

product: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public viewCtrl: ViewController, private alertCtrl: AlertController) {
    this.product = this.formBuilder.group({
      name: [''],
      type: [''],
      price: [''],
      quantity: [''],
      url: [''],
    });
  }

  editProfileForm(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Remove Product',
      message: 'Do you want to change info account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok clicked');
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    alert.present();    
    
  }
}
