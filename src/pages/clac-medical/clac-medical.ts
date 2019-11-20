import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalcBmiPage } from '../calc-bmi/calc-bmi';
import { CalcBmrPage } from '../calc-bmr/calc-bmr';

/**
 * Generated class for the ClacMedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clac-medical',
  templateUrl: 'clac-medical.html',
})
export class ClacMedicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClacMedicalPage');
  }
  GoToCalcBmi(){
    this.navCtrl.push(CalcBmiPage);
  }

  GoToCalcBmR(){
    this.navCtrl.push(CalcBmrPage);
  }
}
