import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EmitterService } from '../../utils/emitter.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logout() {
    console.log('logout()');
    this.navCtrl.setRoot(LoginPage);
  }

}
