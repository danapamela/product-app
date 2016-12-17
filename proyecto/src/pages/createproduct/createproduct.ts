import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { Geolocation } from 'ionic-native';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-createproduct',
  templateUrl: 'createproduct.html'
})
export class CreateproductPage {

  product: FormGroup;

  private setDataCoords: any = { latitude: '', longitude: '' };
  data: any = { latitude: '', longitude: '' };

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private alertCtrl: AlertController, public storage: Storage) {
     this.product = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), ])],
      type: ['', Validators.compose([Validators.required, Validators.minLength(6), ])],
      price: ['', Validators.compose([Validators.required, Validators.minLength(5), ])],
      quantity: ['', Validators.compose([Validators.required, Validators.minLength(1), ])],
      url: ['', Validators.compose([Validators.required, Validators.minLength(6), ])],
    });
  


    this.storage.get("coords").then(res => {
      console.log(res);
      this.data.latitude = res['latitude'];
      this.data.longitude = res['longitude']
    });

  }

  createProductForm() {

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

  ngOnInit() {
    Geolocation.getCurrentPosition().then(resp => {
      this.setDataCoords.latitude = resp.coords.latitude;
      this.setDataCoords.longitude = resp.coords.longitude;

      this.storage.set("coords", this.setDataCoords);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


}
