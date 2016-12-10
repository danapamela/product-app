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
<<<<<<< HEAD
import { ProductService } from '../providers/product.service';
=======
import { Storage } from '@ionic/storage';

>>>>>>> 70613f50c07a5c4ec1be064d841f418b27de1730

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
    TermsPage
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
    TermsPage
  ],
<<<<<<< HEAD
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ProductService]
=======
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  Storage
  ]
>>>>>>> 70613f50c07a5c4ec1be064d841f418b27de1730
})
export class AppModule {}
