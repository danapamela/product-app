import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CreateproductPage} from '../pages/createproduct/createproduct';
import { EditproductPage} from '../pages/editproduct/editproduct';
import { EditprofilePage} from '../pages/editprofile/editprofile';
import { ForgotpassswordPage} from '../pages/forgotpasssword/forgotpasssword';
import { ProductdetailPage} from '../pages/productdetail/productdetail';
import { ProfiledetailPage} from '../pages/profiledetail/profiledetail';
import { RemoveaccountPage} from '../pages/removeaccount/removeaccount';
import { SignoffPage} from '../pages/signoff/signoff';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';
import { RegisterPage } from '../pages/register/register';
import { TermsPage } from '../pages/terms/terms';
import { NetworkPage } from '../pages/network/network';
import { ProductService } from '../providers/product.service';
import { UserService } from '../providers/user.service';
import { Storage } from '@ionic/storage';
import { ProductService } from '../providers/product.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateproductPage,
    EditproductPage,
    EditprofilePage,
    ForgotpassswordPage,
    ProductdetailPage,
    ProfiledetailPage,
    RemoveaccountPage,
    SignoffPage,
    LoginPage,
    OptionsPage,
    RegisterPage,
    TermsPage,
    NetworkPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateproductPage,
    EditproductPage,
    EditprofilePage,
    ForgotpassswordPage,
    ProductdetailPage,
    ProfiledetailPage,
    RemoveaccountPage,
    SignoffPage,
    LoginPage,
    OptionsPage,
    RegisterPage,
    TermsPage,
    NetworkPage
  ],
<<<<<<< HEAD
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  Storage, ProductService
  ]
=======
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ProductService, UserService, Storage]
>>>>>>> 15059d19db7340a9438787edb9594036686a5a1b
})
export class AppModule {}
