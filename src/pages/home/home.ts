import { Component, ViewChild } from '@angular/core';
import { NavController, ActionSheetController,Tabs } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from './../modal/modal'
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { BranchesMapPage } from '../branches-map/branches-map';
import { MainPage } from '../main/main';
import { AboutalfaPage } from '../aboutalfa/aboutalfa';
import { MyApp } from '../../app/app.component';



 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab3: any;
  tab2
  tab1
  navParams: any;
  @ViewChild('myTabs') tabRef: Tabs;

  
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,private iab: InAppBrowser) {
  //   let v :MyApp
  //  v.menuCtrl.enable(false, 'myMenu');
    this.tab1 = MainPage;
  this.tab2 = AboutalfaPage;
  this.tab3=BranchesMapPage
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
 
  goToBranchesMap(){
    this.navCtrl.push(BranchesMapPage)
  }

}
