import { Component, OnInit } from '@angular/core';
import {UserData} from "../../models/userdata";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {NEW_GAME} from "../../actions/actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit {

  endpageStore:Observable<UserData>;
  cash:number;
  debt:number;

  constructor(private store:Store<UserData>, private router:Router) {
    this.endpageStore = store.select('game');
    this.endpageStore.subscribe( v => {
      this.cash = v.cash;
      this.debt = v.debt;
    });
  }

  ngOnInit() {
  }

  newGame() {
    this.router.navigate(['/city-chooser']);
    this.store.dispatch({
      type: NEW_GAME
    })
  }

}
