import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-createproduct',
  templateUrl: 'createproduct.html'
})
export class CreateproductPage {

product: FormGroup;
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder,private alertCtrl: AlertController) {
    this.product = this.formBuilder.group({
      name: [''],
      type: [''],
      price: [''],
      quantity: [''],
      url: [''],
    });

  }

  createProductForm(){

    let alert = this.alertCtrl.create({
      title: 'Confirm add product',
      message: 'Do you want to add product?',
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
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    alert.present();    
    
  }

}
