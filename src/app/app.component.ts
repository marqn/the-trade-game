import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {UserData} from "./models/userdata";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private store:Store<UserData>) {
    this.store.select('game');
  }

  ngOnInit() {
    this.store.dispatch({type:'BUY_PRODUCT'});
  }


}
