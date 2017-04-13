import { Component, OnInit } from '@angular/core';
import {NEW_GAME} from "../../actions/actions";
import {UserData} from "../../models/userdata";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  startpageStore:Observable<UserData>;
  
  constructor(private store:Store<UserData>, private router:Router) {
    this.startpageStore = store.select('game');
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
