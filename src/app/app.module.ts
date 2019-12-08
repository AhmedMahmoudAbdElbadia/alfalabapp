import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ModalPage} from '../pages/modal/modal'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {InAppBrowser } from '@ionic-native/in-app-browser'
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { BranchesMapPage } from '../pages/branches-map/branches-map';
import { TabsPage } from '../pages/tabs/tabs';
import { Page3Page } from '../pages/page3/page3';
import { MainPage } from '../pages/main/main';
import { SocketIoModule,SocketIoConfig } from 'ng-socket-io';
import { ChatRoomPage } from '../pages/chat-room/chat-room';
import { FormsModule } from '@angular/forms';

import { VisitHomePage } from '../pages/visit-home/visit-home';
import { SampleWayPage } from '../pages/sample-way/sample-way';
import { OfferPage } from '../pages/offer/offer';
import { ClacMedicalPage } from '../pages/clac-medical/clac-medical';
import { CalcBmiPage } from '../pages/calc-bmi/calc-bmi';
import { CalcBmrPage } from '../pages/calc-bmr/calc-bmr';
import { AlfaLabServices } from './AlfaLabServices/AlfaLabServices';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';
import { GallaryPage } from '../pages/gallary/gallary';
import { ComplaintsPage } from '../pages/complaints/complaints';
import { OneSignal } from '@ionic-native/onesignal';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { AboutalfaPageModule } from '../pages/aboutalfa/aboutalfa.module';

import { BranchesMapPageModule } from '../pages/branches-map/branches-map.module';
import { CalcBmiPageModule } from '../pages/calc-bmi/calc-bmi.module';
import { CalcBmrPageModule } from '../pages/calc-bmr/calc-bmr.module';
import { ChatRoomPageModule } from '../pages/chat-room/chat-room.module';
import { ClacMedicalPageModule } from '../pages/clac-medical/clac-medical.module';
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { GallaryPageModule } from '../pages/gallary/gallary.module';
import { ImageModalPageModule } from '../pages/image-modal/image-modal.module';

import { MainPageModule } from '../pages/main/main.module';
import { ModalPageModule } from '../pages/modal/modal.module';
import { OfferPageModule } from '../pages/offer/offer.module';
import { OurTeamPageModule } from '../pages/our-team/our-team.module';
import { Page3PageModule } from '../pages/page3/page3.module';
import { SampleWayPageModule } from '../pages/sample-way/sample-way.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { UserForgotpasswordModule } from '../pages/user-forgotpassword/user-forgotpassword.module';
import { UserLoginModule } from '../pages/user-login/user-login.module';
import { UserSignupModule } from '../pages/user-signup/user-signup.module';
import { VisitHomePageModule } from '../pages/visit-home/visit-home.module';
import { AboutalfaPage } from '../pages/aboutalfa/aboutalfa';
import { AlfaInstaPage } from '../pages/alfa-insta/alfa-insta';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { UserLogin } from '../pages/user-login/user-login';
import { AuthService } from '../services/auth.service';
import { UserSignup } from '../pages/user-signup/user-signup';
import { Facebook } from '@ionic-native/facebook/ngx';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { TamanyOffersPage } from '../pages/tamany-offers/tamany-offers';
// import {File} from '@ionic-native/file/ngx';
// import {FileTransfer} from '@ionic-native/file-transfer/ngx';
// import { DocumentViewer } from '@ionic-native/document-viewer/ngx';



const config :SocketIoConfig ={url: 'http://localhost:3001', options:{}}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VisitHomePage,
    ModalPage,BranchesMapPage,TabsPage,SampleWayPage,
    Page3Page,
    MainPage,
    ChatRoomPage,
    OfferPage,
    TamanyOffersPage,
    ClacMedicalPage,
    CalcBmiPage,
    CalcBmrPage,
    GallaryPage,
    ComplaintsPage,
    AboutalfaPage,
    UserLogin,
    AlfaInstaPage,
    UserSignup,
    ContactUsPage,
    CalcBmrPage
    
    
  ],
  imports: [
    BrowserModule, SelectSearchableModule,SocketIoModule.forRoot(config),IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    FormsModule ,HttpModule ,IonicImageViewerModule,IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VisitHomePage,
    ModalPage,
    BranchesMapPage,TabsPage,
    SampleWayPage,
    Page3Page,
    MainPage,
    ChatRoomPage,
    OfferPage,
    TamanyOffersPage,
    ClacMedicalPage,
    CalcBmiPage,
    GallaryPage,
    ComplaintsPage,
    AboutalfaPage,
    UserLogin,
    UserSignup,
    AlfaInstaPage,
    ContactUsPage,
    CalcBmrPage
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
   InAppBrowser,
   AngularFireAuth ,
   AlfaLabServices,
   CallNumber,
   Facebook,
   LaunchNavigator,
   OneSignal,AppAvailability,
   {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
