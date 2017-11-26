import { Component } from '@angular/core';
import { Modal,NavController, ModalController,ModalOptions } from 'ionic-angular';

@Component({
  selector: 'page-technical',
  templateUrl: 'technical.html'
})
export class TechnicalPage {
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController,private modal:ModalController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  openModal()
  {
    const myModalOptions:ModalOptions={
enableBackdropDismiss:false,showBackdrop:true
};
  const myModal:Modal=this.modal.create('ModalPage',myModalOptions);
  myModal.present();
  myModal.onDidDismiss
  }
  openEvent1()
  {   const myModalOptions:ModalOptions={
enableBackdropDismiss:false,showBackdrop:true
};
  const myModal:Modal=this.modal.create('Event1Page',myModalOptions);
  myModal.present();
  myModal.onDidDismiss
  
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }


}