import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import {  AlfaLabServices } from '../../app/AlfaLabServices/AlfaLabServices';
import { UserLogin } from '../user-login/user-login';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { MainPage } from '../main/main';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignup {
  Email: AbstractControl;
  Password: AbstractControl;
  Name: AbstractControl;
  PhoneNum:AbstractControl;
 public form: FormGroup;
  loginError: any;
  loginErrorcode:any;
  resualt: any;
 
  constructor(public navCtrl: NavController,public AlfaLabServices:AlfaLabServices,public toastCtrl: ToastController,public menuCtrl: MenuController ,public navParams: NavParams,private formBuilder: FormBuilder,private auth: AuthService) {
    

    this.form = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      Name:['',Validators.required],
      PhoneNum:['',Validators.required]

    
    });

    this.Email=this.form.controls['Email'];
    this.Password=this.form.controls['Password'];
    this.Name=this.form.controls['Name'];
    this.PhoneNum=this.form.controls['PhoneNum'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignup');
  }

  dashboardPage(){ 
    this.menuCtrl.enable(true, 'myMenu');
    this.navCtrl.setRoot(HomePage); }

  loginPage(){ this.navCtrl.push(UserLogin);}
  forgotPasswordPage(){ this.navCtrl.push(UserForgotpassword);}

  signUp(){
        
  if(!this.Email.hasError('required')&&!this.Email.errors&&!this.Password.hasError('required')&&!this.Name.hasError('required')&&!this.PhoneNum.hasError('required')){
    let credentials= {
    Email: this.Email.value,
    Password: this.Password.value,
    Name:this.Name.value,
    PhoneNum:this.PhoneNum.value
 
    }
    console.log(credentials);
    //  let data = this.form.value;

		if (!credentials.Email) {
			return;
		}
this.AlfaLabServices.addUser(credentials).subscribe(data=>
  {   this.resualt=data},
  err => console.log(err)
  
  )     
		// let credentials = {
		// 	email: data.email,
		// 	password: data.password
    // };
    
    // this.auth.afAuth.auth.signInWithPhoneNumber("04",)

  this.auth

		this.auth.signUpWithEmail(credentials.Email,credentials.Password)
			.then(
        () =>{ this.navCtrl.setRoot(HomePage)
          
          this.menuCtrl.enable(true, 'myMenu');
        
        console.log(this.loginError)
       this.DoneAddToast();
        }
			).catch(error=>{

        // Handle Errors here.
   console.log(error.code);
        
       console.log(error.message);
       if(error.code=="auth/invalid-email"){
        let toast = this.toastCtrl.create({
          message: 'يجب ادخال البريد الالكتروني بشكل صحيح',
          duration: 3000,
          cssClass:"color:red"
        });
        toast.present();
       }
       else if(error.code=="auth/email-already-in-use"){
        let toast = this.toastCtrl.create({
          message: 'هذا البريد الالكتروني مسجل من قبل',
          duration: 3000,
          cssClass:"color:red"
        });
        toast.present();
       }
        else{
          let toast = this.toastCtrl.create({
            message: 'يجب ان تكون كلمه المرور اكثر من 6 ارقام او حروف',
            duration: 3000,
            cssClass:"color:red"
          });
          toast.present();
        }
 
        });
 console.log(credentials.Email);
  
        }
 else{
 this.ValidatToast();
 }
  }

  DoneAddToast() {
    let toast = this.toastCtrl.create({
      message: 'شكرا لك تم الاشتراك بنجاح',
      duration: 3000,
      cssClass:"color:red"
    });
    toast.present();
  }
ValidatToast() {
  let toast = this.toastCtrl.create({
    message: 'من فضلك التأكد من ادخال البيانات كاملة',
    duration: 3000,
    cssClass:"color:red"
  });
  toast.present();
}
ValidatToast2() {
  let toast = this.toastCtrl.create({
    message: 'يجب ادخال البريد الالكتروني بشكل صحيح او كلمه المرور تكون اكثر من 6 احرف',
    duration: 3000,
    cssClass:"color:red"
  });
  toast.present();
}
}
