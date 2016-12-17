import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import { NavController, AlertController, ModalController, NavParams, LoadingController } from 'ionic-angular';
import { CreateproductPage } from '../createproduct/createproduct';
import { ProductService } from '../../providers/product.service';
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

	public product: Product;
	idProduct: number;

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, public modalCtrl: ModalController, public params: NavParams, public productService: ProductService) {


		this.idProduct = this.params.get('idProduct');
		this.getProduct();

	}

	ionViewDidLoad() {
		this.getProduct();
		console.log('Hello ProductDetailPage Page');
	}

	navToRemoveProduct(productId: number) {
		let alert = this.alertCtrl.create({
			title: 'Confirmar remover producto',
			message: 'Deseas eliminar este producto?',
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Ok',
					handler: () => {
						console.log('Ok clicked');

						this.productService.delete(this.idProduct)
							.subscribe(
							() => {
								this.navCtrl.setRoot(HomePage);
							},
							error => {
								console.log("UHUY");
								console.log(error);
							}
							);

						
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


	getProduct() {
		this.productService.getProduct(this.idProduct)
			.subscribe(
			product => {
				this.product = product;
				console.log(this.product);

			},
			error => {
				console.log(error);
			}
			);
	}
}
