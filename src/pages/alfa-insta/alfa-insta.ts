import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  AlfaLabServices } from '../../app/AlfaLabServices/AlfaLabServices';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/';
import { Platform } from 'ionic-angular/platform/platform';
/**
 * Generated class for the AlfaInstaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alfa-insta',
  templateUrl: 'alfa-insta.html',
})
export class AlfaInstaPage {
  insfeed: Array<object> = [];
  feedtext :any
  date: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform,public AlfaLabServices:AlfaLabServices,private appAvailability: AppAvailability,private inAppBrowser: InAppBrowser) {
    this.AlfaLabServices.getinstgramfeed().subscribe(res=>{
      console.log(res) 
      
      
      
      for (let index = 0; index < res.data.length; index++) {

      this.insfeed.push(res.data[index]);
      
         console.log("feedtext :  " +  this.feedtext);
         
         
      }
          console.log("instgram :  " +  this.insfeed);
         
          
         })
  }
  openUrl() {
    const browser = this.inAppBrowser.create('https://www.instagram.com/alfalab_sa/','_blank',{location:'no'});
}
  // launchApp(arg0: string, arg1: string, arg2: string, arg3: string) {
  //   throw new Error("Method not implemented.");
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlfaInstaPage');
  }

}
