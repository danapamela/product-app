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
<<<<<<< HEAD
import { ProductService } from '../../providers/product.service';
import { Geolocation } from 'ionic-native';
import { Storage } from '@ionic/storage';
=======

>>>>>>> c8474b93dd6e091aac3c4c6a77b0ae7f37ae71ad

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	products: Product[] = [];
<<<<<<< HEAD
	private setDataCoords: any = {latitude: '', longitude: ''};
  	data: any = {latitude: '', longitude: ''};

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, public productService: ProductService, public storage: Storage ) {
		this.getProducts();

		this.storage.get("coords").then(res => {
			console.log(res);
			this.data.latitude = res['latitude'];
			this.data.longitude = res['longitude']
		});
=======
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

		
>>>>>>> c8474b93dd6e091aac3c4c6a77b0ae7f37ae71ad
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


<<<<<<< HEAD
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

	ngOnInit() {
		Geolocation.getCurrentPosition().then(resp => {
			this.setDataCoords.latitude = resp.coords.latitude;
			this.setDataCoords.longitude = resp.coords.longitude;

			this.storage.set("coords", this.setDataCoords);
		}).catch((error) => {
			console.log('Error getting location', error);
		});
	}


=======
>>>>>>> c8474b93dd6e091aac3c4c6a77b0ae7f37ae71ad
}
