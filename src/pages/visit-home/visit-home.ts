import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup,AbstractControl } from '@angular/forms';
import {  AlfaLabServices } from '../../services/AlfaLabServices';
import { MainPage } from '../main/main';
import { AuthService } from '../../services/auth.service';
import { UserLogin } from '../user-login/user-login';
import { HomePage } from '../home/home';
import { MyApp } from '../../app/app.component';
import { AlertController } from 'ionic-angular';
class branch {
  public id: number;
  public name: string;
}

class test {
  public id: number;
  public name: string;
}
/**
 * Generated class for the VisitHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visit-home',
  templateUrl: 'visit-home.html',
})

export class VisitHomePage {
  tests:test[];
  test:test;
  resualt: any;
  alfalabservices: any;
  branches: branch[];
  branch: branch;
  PaintName: AbstractControl;
  Gender: AbstractControl;
  PhoneNum: AbstractControl;
  Branch: AbstractControl;
  Time:AbstractControl;
  TestType:AbstractControl;
  public form : FormGroup;
  HomePage:HomePage;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, private auth: AuthService,public navParams: NavParams,private formBuilder: FormBuilder,public AlfaLabServices:AlfaLabServices,public toastCtrl: ToastController) {

this.branches=[
{id:1,name:"الرياض"},
{id:2,name:"الدمام"},
{id:3,name:"ابها"},
{id:4,name:"خميس مشيط"},
{id:5,name:"بريده"},
{id:6,name:"بيشة"},
{id:7,name:"سبت العلايا"},
{id:8,name:"جيزان"},
{id:9,name:"محايل"},
{id:10,name:"الاحساء"},
{id:11,name:"تبوك"},
]
    this.tests=[
      {id:1,name:"التحليل الشامل"},
{id:2,name:"الغدة الدرقية"},
{id:3,name:"تساقط الشعر"},
{id:4,name:"فيتامين د"},
{id:5,name:"فيتامين ب"},
{id:6,name:"الامراض الجنسية المعديه"},

    ]
    this.form = this.formBuilder.group({
      PaintName: ['', Validators.required],
      ReporterPhoneNum: ['', Validators.required],
      Gender: ['', Validators.required],
      PhoneNum: ['', Validators.required],
      Branch: ['', Validators.required],
      Time: ['', Validators.required],
      TestType: ['', Validators.required],
    
    });

    this.PaintName=this.form.controls['PaintName'];
    this.Gender=this.form.controls['Gender'];
    this.PhoneNum=this.form.controls['PhoneNum'];
    this.Branch=this.form.controls['Branch'];
    this.Time=this.form.controls['Time'];
    this.TestType=this.form.controls['TestType'];

  }

  ionViewDidLoad() {
    if(this.auth.afAuth.auth.currentUser==null){
      this.presentConfirm();
   
  
  
      
     }
    }
  addVisitHome(){

 
    
       if(!this.PaintName.hasError('required')&&!this.Gender.hasError('required')&&!this.PhoneNum.hasError('required')&&!this.Branch.hasError('required')&&!this.Time.hasError('required')&&!this.TestType.hasError('required')){
   var VisitHome= {
   PaintName: this.PaintName.value,
   Gender: this.Gender.value,
   PhoneNum:this.PhoneNum.value,
   Branch: this.Branch.value,
   Time:this.Time.value,
   TestType: this.TestType.value

   }
   console.log(VisitHome);
   this.AlfaLabServices.addVisitHome(VisitHome).subscribe(data=>
{   this.resualt=data},
err => console.log(err)

)     
//     this.ReporterName='';
//    this.ReporterPhoneNum='';
//    this.DeadName='';
//      this.DeadAge='';
//    this.DeadType='';
//      this.DeadNation='';
//   this.Country='';
//    this.City='';

//  this.MosqueName='';
//  this.MosqueAddress='';
//  this.FuneralPrayer='';
this.navCtrl.setRoot(MainPage);
this.DoneAddToast();
       }
else{
this.ValidatToast();
}
}  

ValidatToast() {
  let toast = this.toastCtrl.create({
    message: 'من فضلك التأكد من ادخال البيانات كاملة',
    duration: 3000,
    cssClass:"color:red"
  });
  toast.present();
}


presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'من فضلك',
    message: 'لعمل طلب زيارة منزلية يجب تسجيل دخول',
    buttons: [
      {
        text: 'الغاء',
        role: 'cancel',
        handler: () => {
          this.navCtrl.parent.parent.push(HomePage)
          console.log('Cancel clicked');
        }
      },
      {
        text: 'تسجيل الدخول',
        handler: () => {
   
            this.navCtrl.parent.parent.push(UserLogin)
  
        
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}



LoginToast() {
  let toast = this.toastCtrl.create({
    message: 'لاستخدام هذه الصفحة يجب تسجيل الدخول',
    duration: 3000,
    cssClass:"color:red"
  });
  toast.present();
}
DoneAddToast() {
  let toast = this.toastCtrl.create({
    message: 'شكرا لك تم ارسال طلب الزيارة المنزلية وسيتم التواصل معك',
    duration: 3000,
    cssClass:"color:red"
  });
  toast.present();
}
}
