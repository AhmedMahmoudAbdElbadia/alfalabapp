import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AlfaLabServices } from '../../app/AlfaLabServices/AlfaLabServices';
import { MainPage } from '../main/main';
import { HomePage } from '../home/home';
/**
 * Generated class for the ComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html',
})
export class ComplaintsPage {
  Name: AbstractControl;
  PhoneNum: AbstractControl;
  Complaint: AbstractControl;
  public form : FormGroup;
  resualt: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,public AlfaLabServices:AlfaLabServices,public toastCtrl: ToastController) {
  
    this.form = this.formBuilder.group({
      Name: ['', Validators.required],
      PhoneNum: ['', Validators.required],
      Complaint: ['', Validators.required],
     
    
    });

    this.Name=this.form.controls['Name'];  
    this.PhoneNum=this.form.controls['PhoneNum'];
    this.Complaint=this.form.controls['Complaint'];
   





  }

  addComplaints(){

 
    
    if(!this.Name.hasError('required')&&!this.Complaint.hasError('required')&&!this.PhoneNum.hasError('required')){
var Complaints= {
Name: this.Name.value,
PhoneNum:this.PhoneNum.value,
Complaint: this.Complaint.value,

}
console.log(Complaints);
this.AlfaLabServices.addComplaints(Complaints).subscribe(data=>
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
this.navCtrl.setRoot(HomePage);
this.DoneAddToast();
    }
else{
this.ValidatToast();
}
}  

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ComplaintsPage');
  // }
  ValidatToast() {
    let toast = this.toastCtrl.create({
      message: 'من فضلك التأكد من ادخال البيانات كاملة',
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
