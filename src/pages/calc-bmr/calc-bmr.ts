import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the CalcBmrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calc-bmr',
  templateUrl: 'calc-bmr.html',
})
export class CalcBmrPage {
  public form : FormGroup;
  gender:AbstractControl;
  width:AbstractControl;
  height:AbstractControl;
  age:AbstractControl;
  activity:AbstractControl;
  BmrMale: any;
  BmrFemale:any;
  res: any;
  casevisible:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
 
    this.form = this.formBuilder.group({
      gender:['',Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required],
      age:['',Validators.required],
      activity:['',Validators.required]
  

    });
this.gender=this.form.controls['gender']
this.width=this.form.controls['width'];
this.height=this.form.controls['height'];
this.age=this.form.controls['age'];
this.activity=this.form.controls['activity']
  }
count(){
  if(this.gender.value=="m"){
 this.BmrMale=  66 + (13.7 * this.width.value) + (5 * this.height.value) - (6.8 * this.age.value)
 if(this.activity.value=="idle"){
this.res=this.BmrMale * 1.2;
this.casevisible=true;
 }
else if (this.activity.value=="low"){
  this.res=this.BmrMale * 1.375;
  this.casevisible=true;
}
else if (this.activity.value=="medium"){
  this.res=this.BmrMale * 1.55;
  this.casevisible=true;
}
else if (this.activity.value=="high"){
  this.res=this.BmrMale * 1.725;
  this.casevisible=true;
}
console.log(this.res)
  }
  else{
    this.BmrFemale= 655 + (9.6 * this.width.value) + (1.8 * this.height.value) - (4.7 * this.age.value)
    if(this.activity.value=="idle"){
      this.res=this.BmrFemale * 1.2;
      this.casevisible=true;
       }
      else if (this.activity.value=="low"){
        this.res=this.BmrFemale * 1.375;
        this.casevisible=true;
      }
      else if (this.activity.value=="medium"){
        this.res=this.BmrFemale * 1.55;
        this.casevisible=true;
      }
      else if (this.activity.value=="high"){
        this.res=this.BmrFemale * 1.725;
        this.casevisible=true;
      }

      console.log(this.res)
  }
 
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcBmrPage');
  }

}
