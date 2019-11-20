import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, NavParams } from 'ionic-angular';

import { BranchesMapPage } from '../branches-map/branches-map';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Socket } from 'ng-socket-io';
import { ChatRoomPage } from '../chat-room/chat-room';
import { VisitHomePage } from '../visit-home/visit-home';
import { SampleWayPage } from '../sample-way/sample-way';
import { OfferPage } from '../offer/offer';
import { ClacMedicalPage } from '../clac-medical/clac-medical';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  name: any;
  user: any;
  
  constructor(public navCtrl: NavController,public navParams: NavParams,public actionSheetCtrl: ActionSheetController,private auth: AuthService,private iab: InAppBrowser,private socket:Socket) {
 
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  this.user= this.navParams.get("user");
  console.log(this.user);


    
  }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'النتائج',
      cssClass:'fontfamily',
      buttons: [
        {
          text: ' المريض',
          role: 'destructive',
          icon:'ios-contacts',
      
          handler: () => {
            this.GoToResP();
          }
        },{
          text: 'المستشفيات',
          role: 'destructive',
          icon:'md-home',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'المعامل',
          role: 'destructive',
          icon:'md-flask',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'الطبيب',
          role: 'destructive',
          icon:'md-person',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'المديرين',
          role: 'destructive',
          icon:'md-man',
          
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  GoToResP(){
    
    const browser = this.iab.create('http://ir-aml-lb1-690872532.eu-west-1.elb.amazonaws.com:9090/PatientLogin.aspx');


    browser.on('loadstop').subscribe(event => {
       browser.insertCSS({ code: "body{color: red;}" });
       
    });
    
  }
  GoToTamany(){
    this.navCtrl.push(OfferPage)
  }
  
  GoToSampleWay(){
    this.navCtrl.push(SampleWayPage);
  }
  GoToVisitHome(){
    this.navCtrl.push(VisitHomePage);
  }
  goToBranchesMap(){
    this.navCtrl.push(BranchesMapPage)
  }
  GoToOffers(){
    this.navCtrl.push(OfferPage)
  }
  GoToCalc(){
    this.navCtrl.push(ClacMedicalPage)
  }
  joinChat(){
    this.socket.connect();
    this.socket.emit('set-nickname', this.name);
    this.navCtrl.push(ChatRoomPage,{name:this.name});
  }
}
