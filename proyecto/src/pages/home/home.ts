import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ConfirmcreateproductPage } from '../pages/confirmcreateproduct/confirmcreateproduct';
import { ConfirmdeleteproductPage } from '../pages/confirmdeleteproduct/confirmdeleteproduct';
import { ConfirmeditproductPage } from '../pages/confirmeditproduct/confirmeditproduct';
import { ConfirmeditprofilePage } from '../pages/confirmeditprofile/confirmeditprofile';
import { ConfirmforgotpasswordPage } from '../pages/confirmforgotpassword/confirmforgotpassword';
import { ConfirmregisterPage} from '../pages/confirmregister/confirmregister';
import { CreateproductPage} from '../pages/createproduct/createproduct';
import { EditproductPage} from '../pages/editproduct/editproduct';
import { EditprofilePage} from '../pages/editprofile/editprofile';
import { ForgotpassswordPage} from '../pages/forgotpasssword/forgotpasssword';
import { ProductdetailPage} from '../pages/productdetail/productdetail';
import { ProfiledetailPage} from '../pages/profiledetail/profiledetail';
import { RemoveaccountPage} from '../pages/removeaccount/removeaccount';
import { SignoffPage} from '../pages/signoff/signoff';
import { LoginPage } from '../pages/login/login'; 
import { OptionsPage } from '../pages/options/options';
import { RegisterPage } from '../pages/register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

}
