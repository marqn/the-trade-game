import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {UserData} from "./models/userdata";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  storeApp:Observable<UserData>;
  
  constructor(private store:Store<UserData>) {
    this.storeApp = this.store.select('game');
    /*this.storeApp.subscribe(v => {
      this.router.navigate([v.cu]);
    });*/
    
  }

  ngOnInit() {
    // this.store.dispatch({type:'BUY_PRODUCT'});
  }


}
