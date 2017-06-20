import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Winner } from '../winner/winner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter_1:any = 0;
  counter_2:any = 0;
  ws:any;
  msg:any = "Fail...";
  team_name_1: any = "Team 1";
  team_name_2: any = "Team 2";
  boxes: any;


  constructor(public _navCtrl:NavController, public navParams: NavParams) {
    this.connect();
    this.boxes = {
      team_1: [],
      team_2: []
    };
    if(this.navParams.get('team_name_1')){
      this.team_name_1 = this.navParams.get('team_name_1');
      this.team_name_2 = this.navParams.get('team_name_2');
    }
  }

  checkWiner(){
    if (this.counter_1 > 30 ) {
      this._navCtrl.push(Winner, {winner : this.team_name_1});
    }
    if (this.counter_2 > 30 ) {
      this._navCtrl.push(Winner, {winner : this.team_name_2});
    }

  }

  plus_un(equipe) {
    if (equipe == 1) {
      this.counter_1++;
      this.checkWiner();
      this.boxes.team_1.unshift({
        class: "action5"
      });
    }
    else {
      this.counter_2++;
      this.checkWiner();
      this.boxes.team_2.unshift({
        class: "action5"
      });
    }
  }

  moins_un(equipe) {
    if (equipe == 1) {
      this.counter_1--;
      this.boxes.team_1.unshift({
        class: "action4"
      });
    }
    else {
      this.counter_2--;
      this.boxes.team_2.unshift({
        class: "action4"
      });
    }
  }

  connect() {

    this.ws = new WebSocket("ws://192.168.101.138:8080");
    // this.ws = new WebSocket("ws://127.0.0.1:5678/");

    this.ws.onopen = () => {
      console.log('open');
      this.msg = "Connecté !!";
    };

    this.ws.onmessage = (event) => {
      let data = JSON.parse(event.data);
			console.log(data);
			if(data.point == "-1") {
				this.moins_un(data.team);
			} else if(data.point == "+1") {
				this.plus_un(data.team);
			}

    };

    this.ws.onerror = () => {
      console.log('error occurred!');
    };

    this.ws.onclose = (event) => {
      console.log('close code=' + event.code);
    };

  }

}
