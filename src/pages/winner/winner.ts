import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';

/**
 * Generated class for the Winner page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html',
})
export class Winner {

  winner: any = "Team Winner";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.winner = this.navParams.get('winner');
  }

  newGame(){
    this.navCtrl.push(Login);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Winner');
  }

}
