import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GallaryPage } from '../pages/gallary/gallary';
import { OfferPage } from '../pages/offer/offer';
import { ComplaintsPage } from '../pages/complaints/complaints';
import { OneSignal } from '@ionic-native/onesignal';
import { AlfaInstaPage } from '../pages/alfa-insta/alfa-insta';
import { ChatRoomPage } from '../pages/chat-room/chat-room';
import { UserLogin } from '../pages/user-login/user-login';

import { AuthService } from '../services/auth.service';
import { ContactUsPage } from '../pages/contact-us/contact-us';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:string}>;
  signal_app_id:string  ='32d2282c-ea9c-4ce9-a0f2-ecd6bdf20992';
  firebase_id:string='870640029892';
  constructor(public platform: Platform, private auth: AuthService,public menuCtrl: MenuController,public statusBar: StatusBar, public splashScreen: SplashScreen,OneSignal:OneSignal) {

    this.initializeApp();
 
 
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الرئيسية', component: HomePage,icon:"home" },
      { title: 'عروضنا', component: OfferPage,icon:"pricetags" },
      { title: 'معرض الصور', component: GallaryPage,icon:"images" },
      { title: ' الشكاوي والمقترحات', component: ComplaintsPage,icon:"information-circle" },
      { title: 'اتصل بنا', component: ContactUsPage,icon:"call" },
      { title: 'صفحتنا على الانستجرام', component: AlfaInstaPage,icon:"logo-instagram" },
      { title: 'تواصل مع موظفنا', component: ChatRoomPage,icon:"logo-instagram" },
    
    ];
    if (this.platform.is('cordova')) {
     OneSignal.startInit(this.signal_app_id, this.firebase_id);
  OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
 
    OneSignal.handleNotificationReceived().subscribe((res) => {
     // do something when notification is received
     console.log(res)
    });
    
    OneSignal.handleNotificationOpened().subscribe((res) => {
      // do something when a notification is opened
      console.log(res)
    });
    
    OneSignal.endInit();
  }
      // Camera.getPicture().then((fileUri) => url = fileUri);
     else {
      // You're testing in browser, do nothing or mock the plugins' behaviour.
      //
      // var url: string = 'assets/mock-images/image.jpg';
     }
    }
    

  initializeApp() {
    this.platform.ready().then(() => {
      // if(this.auth.afAuth.auth.currentUser==null){
      //   this.menuCtrl.enable(false, 'myMenu');
      //   console.log("اتعملت")
      //  }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rootPage=UserLogin;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  if(page.component===HomePage){
    this.nav.setRoot(page.component);
  }
  else{

  
    this.nav.push(page.component);

  }
  }
}
