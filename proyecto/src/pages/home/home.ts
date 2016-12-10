import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NavController } from 'ionic-angular';
import { ConfirmcreateproductPage } from '../confirmcreateproduct/confirmcreateproduct';
import { ConfirmdeleteproductPage } from '../confirmdeleteproduct/confirmdeleteproduct';
import { ConfirmeditproductPage } from '../confirmeditproduct/confirmeditproduct';
import { ConfirmeditprofilePage } from '../confirmeditprofile/confirmeditprofile';
import { ConfirmforgotpasswordPage } from '../confirmforgotpassword/confirmforgotpassword';
import { ConfirmregisterPage} from '../confirmregister/confirmregister';
import { CreateproductPage} from '../createproduct/createproduct';
import { EditproductPage} from '../editproduct/editproduct';
import { EditprofilePage} from '../editprofile/editprofile';
import { ForgotpassswordPage} from '../forgotpasssword/forgotpasssword';
import { ProductdetailPage} from '../productdetail/productdetail';
import { ProfiledetailPage} from '../profiledetail/profiledetail';
import { RemoveaccountPage} from '../removeaccount/removeaccount';
import { SignoffPage} from '../signoff/signoff';
import { LoginPage } from '../login/login'; 
import { OptionsPage } from '../options/options';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

products: Product[] = [];

  constructor(public navCtrl: NavController) {
    
 let producto1 = new Product();
 let producto2 = new Product();
 producto1.id=1;
 producto2.id=2;
 
this.products.push(producto1);
this.products.push(producto2);
  }

navToProductDetail(product:any){

this.navCtrl.push(ProductdetailPage);

}

}
