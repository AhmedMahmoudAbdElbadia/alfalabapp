import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { GeolocationOptions, Geolocation} from '@ionic-native/geolocation';

/**
 * Generated class for the BranchesMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branches-map',
  templateUrl: 'branches-map.html',
})
export class BranchesMapPage {
  pet:any;
  constructor(public navCtrl: NavController,public toastCtrl: ToastController,private launchNavigator: LaunchNavigator, public navParams: NavParams) {
    
    
    this.pet = "riad";
    let geoOptions: GeolocationOptions = {
      enableHighAccuracy:true,
      timeout:500000,
      maximumAge:10,
    };
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   let toast = this.toastCtrl.create({
      
    //     message: ""+resp.coords,
    //     duration: 3000,
    //     cssClass:"color:red"
    //   });
    //   toast.present();
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BranchesMapPage');
  }
GoTo(location){

  
  let options: LaunchNavigatorOptions = {
    start: '',
    app:this.launchNavigator.APP.GOOGLE_MAPS
  };
  
  this.launchNavigator.navigate(location, options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
}
}
