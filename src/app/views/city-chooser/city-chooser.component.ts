import {Component, OnInit} from "@angular/core";
import {City} from "../../models/city";
import {Store} from "@ngrx/store";
import {CHANGE_CITY} from "../../actions/actions";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UserData} from "../../models/userdata";
import {CityService} from "../../services/city.service";

@Component({
  selector: 'app-city-chooser',
  templateUrl: './city-chooser.component.html',
  styleUrls: ['./city-chooser.component.css']
})
export class CityChooserComponent implements OnInit {

  private cities:Array<City>;

  cityChooserStore:Observable<UserData>;


  constructor(private store:Store<UserData>, private router:Router, private cityService:CityService) {
    this.cityChooserStore = store.select('game');
    /*
     this.cityChooserStore.subscribe(v => {
     console.log(v);
     this.cities = v.cities;
     });
     */
  }

  ngOnInit() {
    this.cities = this.cityService.getCities();
  } 

  private changeCity(city:City):void {
    this.store.dispatch({
      type: CHANGE_CITY,
      payload: city
    });

    this.router.navigate(['/products']);
  }

}
