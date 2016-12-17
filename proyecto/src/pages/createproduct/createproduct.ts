import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { Geolocation } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { Product } from '../../models/product';
import { ProductService } from '../../providers/product.service';

@Component({
  selector: 'page-createproduct',
  templateUrl: 'createproduct.html'
})
export class CreateproductPage {

  productForm: FormGroup;
  product: Product;

  private setDataCoords: any = { latitude: '', longitude: '' };
  data: any = { latitude: '', longitude: '' };

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private alertCtrl: AlertController, public storage: Storage, public productService: ProductService) {
    this.product = new Product();
    this.productForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      type: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      price: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      quantity: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
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
            this.product.name = this.productForm.value.name;
            this.product.price = this.productForm.value.price;
            this.product.type = this.productForm.value.type;
            this.product.quantity = this.productForm.value.quantity;

            this.storage.get("coords").then(res => {
              console.log(res);
              this.product.latitute  = res['latitude'];
              this.product.longitude = res['longitude']
            });


            this.createProduct();
           
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


  createProduct(){
    this.productService.create(this.product)
      .subscribe(
      res => {
        console.log("why me");
        this.navCtrl.setRoot(HomePage);
      },
      error => {
        console.log(error);
      }
      );    
  }


}
