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
import { ProductService } from '../../providers/product.service';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	products: Product[] = [];

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, public productService: ProductService) {
		this.getProducts();
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
			this.getProducts();
			refresher.complete();
		}, 2000);
	}


	getProducts() {
		this.productService.getProducts()
			.subscribe(
			products => {
				this.products = products;
			},
			error => {
				console.log(error);
			}
			);
	}


}
