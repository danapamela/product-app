import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import { NavController, AlertController } from 'ionic-angular';
import { CreateproductPage } from '../createproduct/createproduct';
import { EditproductPage } from '../editproduct/editproduct';
import { EditprofilePage } from '../editprofile/editprofile';
import { ForgotpassswordPage } from '../forgotpasssword/forgotpasssword';
import { ProductdetailPage } from '../productdetail/productdetail';
import { ProfiledetailPage } from '../profiledetail/profiledetail';
import { RemoveaccountPage } from '../removeaccount/removeaccount';
import { SignoffPage } from '../signoff/signoff';
import { LoginPage } from '../login/login';
import { OptionsPage } from '../options/options';
import { RegisterPage } from '../register/register';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	products: Product[] = [];
	users: User[] = [];

	constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

		let producto1 = new Product();
		let producto2 = new Product();
		producto1.id = 1;
		producto1.name = "Nombre 1";
		producto2.id = 2;
		producto2.name = "Nombre 2";

		this.products.push(producto1);
		this.products.push(producto2);

		
	}

	navToOptionsPage() {
		this.navCtrl.setRoot(OptionsPage);
	}

	navToProductDetail(product: any) {
		this.navCtrl.push(ProductdetailPage);
	}

	navToProfileDetail(user: any) {
		this.navCtrl.push(ProfiledetailPage);

	}

	navToCreateproductPage() {
		this.navCtrl.push(CreateproductPage);
	}	

	navToRemoveAccount() {
		let alert = this.alertCtrl.create({
			title: 'Confirm Remove Product',
			message: 'Do you want to remove this product?',
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
						this.navCtrl.setRoot(LoginPage);
					}
				}
			]
		});
		alert.present();
	}

  doRefreshHone(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');


		let producto1 = new Product();
		let producto2 = new Product();
		producto1.id = 1;
		producto1.name = "Nombre 1";
		producto2.id = 2;
		producto2.name = "Nombre 2";

		this.products = [];

		this.products.push(producto2);
		this.products.push(producto2);
		this.products.push(producto2);
		this.products.push(producto2);
		this.products.push(producto2);
		this.products.push(producto2);


      refresher.complete();
    }, 2000);
  }	

}
