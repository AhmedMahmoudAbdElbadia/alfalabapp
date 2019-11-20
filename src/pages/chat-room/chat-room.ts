import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ChatRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
messages = [];
name = '';
message = '';
  constructor(public navCtrl: NavController,private toastCtrl:ToastController,public storage: Storage , public navParams: NavParams,private socket:Socket) {
    this.name=this.navParams.get('name');

    this.getMessages().subscribe(message =>{
      this.messages.push(message);
      storage.set('messages', this.messages);
    })

    this.getUsers().subscribe(data=>{
      let user = data['user'];
      if (data['event']==='left'){
        this.showToast('User left '+ user)
      }
      else{
        this.showToast('User joined '+ user)
      }
    })
  }
showToast(msg){
  let toast = this.toastCtrl.create({
    message:msg,
    duration:2000
  });
  toast.present();
}
  getUsers(){
    let observable  = new Observable(observer =>{
  this.socket.on('users-changed', data =>{
    observer.next(data);

  })
    })
    return observable;
  }
  autoScroll() {
    setTimeout(function () {
        var itemList = document.getElementById("chat-autoscroll");
        itemList.scrollTop = itemList.scrollHeight;
    }, 10);
}
ionViewDidLoad() {
 this.storage.get('messages').then((val) => {
    console.log('messages', val);
  
  });
  
    
  
  
}
  sendMessage(){
    this.socket.emit('add-message',{text:this.message});
    
    this.message='';
this.autoScroll();

console.log(this.messages)
  }

ionViewWillLeave(){
  this.socket.disconnect();
}

getMessages(){
  let observable  = new Observable(observer =>{
this.socket.on('message', data =>{
  observer.next(data);

})
  })
  return observable;
}

}
