import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the GallaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallary',
  templateUrl: 'gallary.html',
})

export class GallaryPage {
  _imageViewerCtrl:ImageViewerController
  images = ['Tamany-Daimond.jpg', 'Tamany-Gold.jpg', 'Tamany-Silver.jpg', 'Tamany.png'];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
    setTimeout(() => imageViewer.dismiss(), 1000);
    imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GallaryPage');
  }

}
