import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})

export class EditprofilePage {



  profile: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public viewCtrl: ViewController, private alertCtrl: AlertController) {
    this.profile = this.formBuilder.group({
      email: [''],
      password: [''],
      firstname: [''],
      lastname: [''],
      phone: [''],
    });
  }

  editProfileForm(){

    let alert = this.alertCtrl.create({
      title: 'Confirm Remove Account',
      message: 'Do you want to change info account?',
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
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    alert.present();    
    
  }

  ionViewDidLoad() {
    console.log('Hello EditProfilePage Page');
  }

}
