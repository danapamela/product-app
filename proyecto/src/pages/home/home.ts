import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import { NavController, AlertController, NavParams} from 'ionic-angular';
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
import { Geolocation } from 'ionic-native';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	products: Product[] = [];
	idUser: number;
	private setDataCoords: any = {latitude: '', longitude: ''};
  	data: any = {latitude: '', longitude: ''};

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, public productService: ProductService, public storage: Storage,  public params: NavParams) {
		this.getProducts();


		this.idUser = this.params.get('idUser');

		this.storage.get("coords").then(res => {
			console.log(res);
			this.data.latitude = res['latitude'];
			this.data.longitude = res['longitude']
		});
	}

	navToOptionsPage() {
		this.navCtrl.setRoot(OptionsPage);
	}

	navToProductDetail(idProduct: number) {
		this.navCtrl.push(ProductdetailPage, {
			idProduct: idProduct
		});
	}

	navToProfileDetail(user: any) {
		this.navCtrl.push(ProfiledetailPage);

	}

	navToCreateproductPage() {
		this.navCtrl.push(CreateproductPage);
	}

	navToRemoveAccount() {
		let alert = this.alertCtrl.create({
			title: 'Eliminar cuenta',
			message: 'Deseas eliminar la cuenta?',
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

	ngOnInit() {
		Geolocation.getCurrentPosition().then(resp => {
			this.setDataCoords.latitude = resp.coords.latitude;
			this.setDataCoords.longitude = resp.coords.longitude;

			this.storage.set("coords", this.setDataCoords);
		}).catch((error) => {
			console.log('Error getting location', error);
		});
	}


	deleteAccount(){

	}

}
