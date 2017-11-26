import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {ViewController} from 'ionic-angular';


/**
 * Generated class for the Event1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event1',
  templateUrl: 'event1.html',
})
export class Event1Page {

   constructor( private view:ViewController) {
  }
closeEvent1()
{
this.view.dismiss();
}
prize()
{
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Event1Page');
  }

}
