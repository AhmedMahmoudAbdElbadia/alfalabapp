import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AlfaLabServices } from '../../app/AlfaLabServices/AlfaLabServices';
/**
 * Generated class for the CalcBmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calc-bmi',
  templateUrl: 'calc-bmi.html',
})
export class CalcBmiPage {
  finalres: any;
  public form : FormGroup;
width:AbstractControl;
height:AbstractControl;
heightByMeter:number;
heightAfter:number;
res:any;
case:string;
casevisible:boolean;
 InstfeedImagesUrl:any;
insfeed: Array<object> = [];
  insfeedUrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,public AlfaLabServices:AlfaLabServices) {
   

    this.casevisible=false;
    this.form = this.formBuilder.group({
      width: ['', Validators.required],
      height: ['', Validators.required],
  

    });
this.width=this.form.controls['width'];
this.height=this.form.controls['height'];
  }

 count(){
this.heightByMeter= this.height.value / 100;
this.heightAfter= this.heightByMeter * this.heightByMeter;
this.res=this.width.value / this.heightAfter;
this.finalres =this.res.toFixed(2);

console.log(this.res.toFixed(2));
if(this.res < 15 ){
  console.log("نقص شديد جدا في الوزن");
  this.case="نقص شديد جدا في الوزن";
  this.casevisible=true;

 }
 else if (this.res >= 15 && this.res <= 16){
  console.log("نقص الوزن الشديد");
  this.case="نقص الوزن الشديد";
  this.casevisible=true;
 }
 else if (this.res >= 16  && this.res <= 18.5){
  console.log("نقص الوزن ");
  this.case="نقص الوزن ";
  this.casevisible=true;
 }
 else if (this.res >= 18.5  && this.res <= 25){
  console.log("وزن (صحي) طبيعيى");
  this.case="وزن (صحي) طبيعيى";
  this.casevisible=true;
 }
 else if (this.res >= 25   && this.res <= 30	){
  console.log("وزن زائد");
  this.case="وزن زائد";
  this.casevisible=true;
 }
 else if (this.res >= 30   && this.res <= 35	){
  console.log("تعاني من السمنة المفرطة");
  this.case="تعاني من السمنة المفرطة";
  this.casevisible=true;
 }
 else if (this.res >= 35    && this.res <= 40		){
  console.log("سمنة مفرطة");
  this.case="سمنة مفرطة";
  this.casevisible=true;
 }
 else if (this.res > 40		){
  console.log("سمنة مفرطة جدا");
  this.case="سمنة مفرطة جدا";
  this.casevisible=true;
 }
 }
}
