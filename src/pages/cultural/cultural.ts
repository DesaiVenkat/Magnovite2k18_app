import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Modal, ModalController,ModalOptions } from 'ionic-angular';

@Component({
  selector: 'page-cultural',
  templateUrl: 'cultural.html'
})
export class CulturalPage {

  constructor(public navCtrl: NavController,private modal:ModalController) {  }
  openEvent1()
  {   const myModalOptions:ModalOptions={
enableBackdropDismiss:false,showBackdrop:true
};
  const myModal:Modal=this.modal.create('Event1Page',myModalOptions);
  myModal.present();
  myModal.onDidDismiss
  
  }



}
