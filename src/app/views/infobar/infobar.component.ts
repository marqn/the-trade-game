import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {UserData} from "../../models/userdata";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

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


  ngOnInit() {
  }

}
