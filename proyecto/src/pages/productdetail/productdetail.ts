import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { CreateproductPage } from '../createproduct/createproduct';
import { EditproductPage } from '../editproduct/editproduct';
import { EditprofilePage } from '../editprofile/editprofile';
import { ForgotpassswordPage } from '../forgotpasssword/forgotpasssword';
import { ProfiledetailPage } from '../profiledetail/profiledetail';
import { RemoveaccountPage } from '../removeaccount/removeaccount';
import { SignoffPage } from '../signoff/signoff';
import { LoginPage } from '../login/login';
import { OptionsPage } from '../options/options';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';


@Component({
	selector: 'page-productdetail',
	templateUrl: 'productdetail.html'
})
export class ProductdetailPage {

	product: Product;

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, public modalCtrl: ModalController) {
		this.product = new Product();
		this.product.name = "Producto";
		this.product.type = "Celular";
	}

	ionViewDidLoad() {
		console.log('Hello ProductDetailPage Page');
	}

	navToRemoveProduct() {
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
						this.navCtrl.setRoot(HomePage);
					}
				}
			]
		});
		alert.present();
	}

	navToEditProduct() {
		let modal = this.modalCtrl.create(EditproductPage);
		modal.present();
	}

	navToSignOff() {
		let alert = this.alertCtrl.create({
			title: 'Confirm SignOff',
			message: 'Do you want to sign off?',
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
}
