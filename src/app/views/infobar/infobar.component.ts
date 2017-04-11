import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {UserData} from "../../models/userdata";

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.css']
})
export class InfobarComponent implements OnInit {

  private gamedata:any;

  constructor(private store:Store<UserData>) {
    this.store.select('game')
      .subscribe(v =>
        this.gamedata = v
      );
  }


  ngOnInit() {}

}
