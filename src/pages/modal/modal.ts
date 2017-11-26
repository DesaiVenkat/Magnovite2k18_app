import { Component } from '@angular/core';
import { IonicPage, NavParams ,ViewController} from 'ionic-angular';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
 sign: string = "Login";
  isAndroid: boolean =true;



  constructor( private navParams: NavParams,private view:ViewController,platform: Platform) {
  this.isAndroid = platform.is('android');
  }
closeModal()
{
this.view.dismiss();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
