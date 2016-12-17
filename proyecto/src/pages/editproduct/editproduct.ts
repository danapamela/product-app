import { Component } from '@angular/core';
import { NavController, ViewController, AlertController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../providers/product.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html'
})
export class EditproductPage {
  public product: Product;
  public idProduct: number;
  public productForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public viewCtrl: ViewController, public alertCtrl: AlertController, public params: NavParams, public productService: ProductService) {
    this.idProduct = this.params.get('idProduct');
    this.getProduct();
  }

  editProfileForm() {

    let alert = this.alertCtrl.create({
      title: 'Confirm Remove Product',
      message: 'Deseas actualizar el producto?',
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
            this.product.longitude = this.productForm.value.longitude;
            this.product.latitute = this.productForm.value.latitute;
            this.updateProduct();
          }
        }
      ]
    });
    alert.present();

  }


  getProduct() {
    this.productService.getProduct(this.idProduct)
      .subscribe(
      product => {
        this.product = product;
        console.log(this.product);

        this.productForm = this.formBuilder.group({
          name: [this.product.name, Validators.compose([Validators.required, Validators.minLength(4)])],
          type: [this.product.type, Validators.compose([Validators.required, Validators.minLength(6)])],
          price: [this.product.price, Validators.compose([Validators.required, Validators.minLength(5)])],
          quantity: [this.product.quantity, Validators.compose([Validators.required, Validators.minLength(1)])],
          latitute: [this.product.latitute, Validators.compose([Validators.required, Validators.minLength(6)])],
          longitude: [this.product.longitude, Validators.compose([Validators.required, Validators.minLength(6)])],
        });

      },
      error => {
        console.log(error);
      }
      );
  }

  updateProduct() {
    this.productService.update(this.product)
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
