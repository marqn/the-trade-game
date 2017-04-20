import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {UserData} from "../../models/userdata";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {FINISH_GAME} from "../../actions/actions";

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.css']
})
export class InfobarComponent implements OnInit {

  private gamedata:any;
  infoBarStore:Observable<UserData>;

  constructor(private store:Store<UserData>, private router:Router) {
    this.infoBarStore = this.store.select('game');
    this.infoBarStore.subscribe(v => {
        this.gamedata = v;
        if (v.isEndGame) {
          this.router.navigate(['/endpage']);
        }
      }
    );
  }

  finishGame() {
    this.store.dispatch({
      type: FINISH_GAME
    });
    this.router.navigate(["/endpage"]);
  }

  hasChangeCityBtn():boolean {
    if (this.router.url != '/' && this.router.url != '/city-chooser' && this.gamedata.dayLimit > 1)
      return true;
    else
      return false;
  }


  ngOnInit() {
  }

}
