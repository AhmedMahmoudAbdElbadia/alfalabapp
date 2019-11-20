import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { CallNumber } from '@ionic-native/call-number/ngx';
/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  pet:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,private callNumber: CallNumber) {
  this.pet = "riad";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }
//   goToRyadBranch(){
// this.navCtrl.push()
//   }
  // callSupport(): void {
  //   this.callNumber.callNumber('3525235235235', true);
  // }
  
// call(){
//   this.callNumber.callNumber("0163697979", true)
//   .then(res => console.log('Launched dialer!', res))
//   .catch(err => console.log('Error launching dialer', err));
// }
  
   
  
    presentModal() {
      const modal = this.modalCtrl.create(ModalPage);
      modal.present();
    }
  
}
