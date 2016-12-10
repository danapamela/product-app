import { Component } from '@angular/core';
import { NavController,AlertController,ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EditprofilePage } from '../editprofile/editprofile';
import { User } from '../../models/user';

@Component({
  selector: 'page-profiledetail',
  templateUrl: 'profiledetail.html'
})


export class ProfiledetailPage {


  user: User;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public modalCtrl: ModalController) {
	this.user = new User();
	this.user.firstname = "Pepe";
	this.user.email = "Pepe@pepe.com";
  }

  ionViewDidLoad() {
    console.log('Hello ProfileDetailPage Page');
  }

  navToRemoveAccount(){
  	let alert = this.alertCtrl.create({
	    title: 'Confirm Remove Account',
	    message: 'Do you want to remove account?',
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

  navToEditProfile(){
  	let modal = this.modalCtrl.create(EditprofilePage);
    modal.present();
  }

  navToSignOff(){
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
