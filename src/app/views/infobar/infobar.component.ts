import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {UserData} from "../../models/userdata";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.css']
})
export class InfobarComponent implements OnInit {

  private gamedata:any;
  infoBarStore:Observable<UserData>;

  constructor(private store:Store<UserData>) {
    this.infoBarStore = this.store.select('game');
    this.infoBarStore.subscribe(v =>
        this.gamedata = v
      );
  }


  ngOnInit() {}

}
