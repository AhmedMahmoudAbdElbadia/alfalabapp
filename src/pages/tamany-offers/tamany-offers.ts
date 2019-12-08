import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlfaLabServices } from '../../app/AlfaLabServices/AlfaLabServices';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the TamanyOffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tamany-offers',
  templateUrl: 'tamany-offers.html',
})
export class TamanyOffersPage {
  hideitem : boolean
  buttonplus:boolean
  buttonclose:boolean
  lists :Array<any>=[]
  tamanytest: Array<object> = [];
  tamanytests: Array<object> = [];
  is:  any;
  tests: Array<object> = [];
  data: any;
  name: any;
  tamany: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public alfaLabservices : AlfaLabServices) {
    this.hideitem=false;
    this.buttonplus=true;
    this.buttonclose=false;

    this.alfaLabservices.gettamany().subscribe(data=>{
  // this.tamanytests= data.TamanySilver.Tests;
 this.tamany=data

 console.log('Tamany',this.tamany);
   
//       for (let index = 0; index <data.length; index++) {
//         data[index].info.Tests
//         for (let index2 = 0; index2 <data[index].info.Tests.length; index2++) {
//           this.tests.push(data[index].info.Tests[index2])
// console.log("TamanyTamany",  this.tests);

//         }
       
//     // console.log("length",this.tamanytests[0]);

    
         
           
           
           
//         }
       
      //  
        
      console.log(data);
    })
    // this.lists=[
    //   {
    //     name:"باقة طمني الفضية",
    //     buttonplus:true,
    //     buttonclose:false,
    //     hideitem:false,
    //     img:"../../assets/imgs/Tamany-Silver.jpg"
    //   },
    //   {
    //     name:"باقة طمني الذهبية",
    //     buttonplus:true,
    //     buttonclose:false,
    //     hideitem:false,
    //     img:"../../assets/imgs/Tamany-Gold.jpg"
        
    //   },
    //   {
    //     name:"باقة طمني الالماسية",
    //     buttonplus:true,
    //     buttonclose:false,
    //     hideitem:false,
    //     img:"../../assets/imgs/Tamany-Daimond.jpg"
        
    //   }
    // ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }
// showdetalis(item){
  
//   if(item.info.hideitem==true ){
//     item.info.hideitem=false;
//     item.info.buttonplus=true;
//     item.info.buttonclose=false;
//   }
//   else{
//     item.info.hideitem=true;
//     item.info.buttonplus=false;
//     item.info.buttonclose=true;
//   }
 
// }

showdetalis(){
  
  if(this.hideitem==true ){
    this.hideitem=false;
    this.buttonplus=true;
    this.buttonclose=false;
  }
  else {
    this.hideitem=true;
    this.buttonplus=false;
    this.buttonclose=true;
  }
 
}

presentModal(name) {
  const modal = this.modalCtrl.create(ModalPage,{name:name});
  modal.present()

}

// downloadAndOpenPdf(){
//   let path = null;
//   if(this.platform.is('ios')){
// path = this.file.documentsDirectory;
//   }
//   else{
//     path = this.file.dataDirectory;
//   }
//   const transfer  = this.transfer.create();
//   transfer.download('assets/profile.pdf',)
// }
}



