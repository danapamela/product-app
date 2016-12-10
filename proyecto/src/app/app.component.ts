import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { CreateproductPage } from '../pages/createproduct/createproduct';
import { EditproductPage } from '../pages/editproduct/editproduct';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ForgotpassswordPage } from '../pages/forgotpasssword/forgotpasssword';
import { ProductdetailPage } from '../pages/productdetail/productdetail';
import { ProfiledetailPage } from '../pages/profiledetail/profiledetail';
import { RemoveaccountPage } from '../pages/removeaccount/removeaccount';
import { SignoffPage } from '../pages/signoff/signoff';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';
import { RegisterPage } from '../pages/register/register';
import { TermsPage } from '../pages/terms/terms';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = OptionsPage;
  isLogin: boolean = true;


  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    if (this.isLogin) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = HomePage;
    }

    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Crear producto', component: CreateproductPage },      
      { title: 'Detalle del perfil', component: ProfiledetailPage },
      { title: 'Cerrar sesión', component: SignoffPage }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    
    if(page.component.name == 'SignoffPage'){
      this.nav.setRoot(OptionsPage);
    }else{
      this.nav.push(page.component);  
    }
    
  }
}