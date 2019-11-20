import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VisitHomePage } from '../visit-home/visit-home';

/**
 * Generated class for the SampleWayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample-way',
  templateUrl: 'sample-way.html',
})
export class SampleWayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
// GoToBookTime(){
//     this.navCtrl.push(BookTimePage);
//   }
  GoToVisitHome(){
    this.navCtrl.push(VisitHomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleWayPage');
  }

}
