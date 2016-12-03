import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

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
import { HomePage } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';
import { RegisterPage } from '../pages/register/register';;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  isLogin: boolean = true;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation

    if(this.isLogin){
      this.rootPage = LoginPage;
    }else{
      this.rootPage = HomePage;
    }


    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Ingreso o Registro', component: OptionsPage },
      { title: 'Ingresar', component: LoginPage },
      { title: 'Olvide Mi Contraseña', component: ForgotpassswordPage },
      { title: 'Confirmar Contraseña', component: ConfirmforgotpasswordPage },
      { title: 'Registrarme', component: RegisterPage },
      { title: 'Confirmar Registro', component: ConfirmregisterPage },
      { title: 'Detalle Del Perfil', component: ProfiledetailPage },
      { title: 'Eliminar Cuenta', component: RemoveaccountPage },
      { title: 'Cerrar Sesión', component: SignoffPage },
      { title: 'Editar Perfil', component: EditprofilePage },
      { title: 'Confirmar Cambio Del Perfil', component: ConfirmeditprofilePage },
      { title: 'Detalle Del Producto', component: ProductdetailPage },
      { title: 'Editar Producto', component: EditproductPage },
      { title: 'Confirmar Cambio Del Producto', component: ConfirmeditproductPage },
      { title: 'Crear Producto', component: CreateproductPage },
      { title: 'Confirmar Creacion Del Producto', component: ConfirmcreateproductPage },
      { title: 'Confirmar Eliminar Producto', component: ConfirmdeleteproductPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
