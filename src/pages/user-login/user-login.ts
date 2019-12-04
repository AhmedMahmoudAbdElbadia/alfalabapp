import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import {  AlfaLabServices } from '../../app/AlfaLabServices/AlfaLabServices';
import { Storage } from '@ionic/storage';
import { UserSignup } from '../user-signup/user-signup';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';
import { MainPage } from '../main/main';
import { HomePage } from '../home/home';
import { AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MyApp } from '../../app/app.component';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLogin {
  PhoneNum: AbstractControl;
  Password: AbstractControl;
 public form: FormGroup;
 loginError: string;
  user: any;
  facebook: any;
  data: any;
  userdata: any;
  userEmail: string;
  
  constructor(public navCtrl: NavController, private storage:Storage,public AlfaLabServices:AlfaLabServices,public toastCtrl: ToastController,public menuCtrl: MenuController,private fb: Facebook,public navParams: NavParams,private formBuilder: FormBuilder,private auth: AuthService) {
  
    this.form = this.formBuilder.group({
      PhoneNum: ['', Validators.required],
      Password: ['', Validators.required],

    
    });

    this.PhoneNum=this.form.controls['PhoneNum'];
    this.Password=this.form.controls['Password'];
  }

  ionViewDidLoad() {
     if(this.auth.afAuth.auth.currentUser==null){
        this.menuCtrl.enable(false, 'myMenu');
        
       }
    console.log('ionViewDidLoad UserLogin');
  }

  dashboardPage(){ this.navCtrl.push(MainPage); }
  signupPage(){ this.navCtrl.push(UserSignup); }
  forgotPasswordPage(){ this.navCtrl.push(UserForgotpassword); }
  GoToMain(){
    this.menuCtrl.enable(true, 'myMenu');
    this.navCtrl.setRoot(HomePage);
  }

  loginFb(){
    // Login with permissions
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
    .then( (res: FacebookLoginResponse) => {

        // The connection was successful
        if(res.status == "connected") {

            // Get user ID and Token
            var fb_id = res.authResponse.userID;
            var fb_token = res.authResponse.accessToken;

            // Get user infos from the API
            this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

                // Get the connected user details
                var gender    = user.gender;
                var birthday  = user.birthday;
                var name      = user.name;
                var email     = user.email;

                console.log("=== USER INFOS ===");
                console.log("Gender : " + gender);
                console.log("Birthday : " + birthday);
                console.log("Name : " + name);
                console.log("Email : " + email);

                // => Open user session and redirect to the next page

            });

        } 
        // An error occurred while loging-in
        else {

            console.log("An error occurred...");

        }

    })
    .catch((e) => {
        console.log('Error logging into Facebook', e);
    });
}
Login(){
   
  if(!this.PhoneNum.hasError('required')&&!this.Password.hasError('required')){
    let credentials= {
      PhoneNum: this.PhoneNum.value,
      Password: this.Password.value,
      }
      console.log(credentials);
      this.AlfaLabServices.GetUserByPhoneNum(credentials.PhoneNum).subscribe(data =>{
      this.userEmail=data[0].Email;
      
      console.log("user data is "+ this.userEmail);
      }
       
         

      )
        // console.log("user data is "+ this.userdata);
    //  let data = this.form.value;

		if (!credentials.PhoneNum) {
			return;
		}

		// let credentials = {
		// 	email: data.email,
		// 	password: data.password
    // };
    
		this.auth.signInWithEmail(String(this.userEmail),credentials.Password)
			.then(
        res => {  
        
          this.auth.afAuth.authState.subscribe(user=>{
            this.user=user
            console.log(this.user.email) 
            this.storage.set('useremail',this.user.email)
             this.navCtrl.setRoot(HomePage,{user: this.user});
            
          })
      
      
 this.menuCtrl.enable(true, 'myMenu');
 
        }
			).catch(error=>{

        // Handle Errors here.
   console.log(error.code);
        
       console.log(error.message);
       if(error.code=="auth/user-not-found" ||error.code=="auth/invalid-email"|| error.code=="auth/wrong-password"){
        let toast = this.toastCtrl.create({
          message: 'خطأ في اسم المستخدم او كلمة المرور',
          duration: 3000,
          cssClass:"color:red"
        });
        toast.present();
       }
       
      //   else{
      //     let toast = this.toastCtrl.create({
      //       message: 'يجب ان تكون كلمه المرور اكثر من 6 ارقام او حروف',
      //       duration: 3000,
      //       cssClass:"color:red"
      //     });
      //     toast.present();
      //   }
 
        });;

//  this.DoneAddToast();
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

// async facebookLogin() {
//   try {
//     // Log in to Facebook and request user data
//     let facebookResponse = await this.fb.login(['public_profile', 'email']);
//     let facebookAuthData = {
//       id: facebookResponse.authResponse.userID,
//       access_token: facebookResponse.authResponse.accessToken,
//     };

//     // Request the user from parse
//     // let toLinkUser = new Parse.User();
//     // let user = await toLinkUser._linkWith('facebook', {authData: facebookAuthData});

//     // // If user did not exist, updates its data
//     // if (!user.existed()) {
//     //   let userData = await this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture)', []);
//     //   user.set('username', userData.name);
//     //   user.set('name', userData.name);
//     //   user.set('email', userData.email);
//     //   await user.save();
//     // }

//     this.navCtrl.setRoot('HomePage');
//   } catch (err) {
//     console.log('Error logging in', err);

//     this.toastCtrl.create({
//       message: err.message,
//       duration: 2000
//     }).present();
//   }
// }
}
