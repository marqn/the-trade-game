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
    this.cityChooserStore.subscribe(v => {

      this.cities = new Array();
      for(let city of this.cityService.getCities()){
        if(city != v.currentCity) {
          this.cities.push(city);
        }
      }
    });
  }

  ngOnInit() {}

  private changeCity(city:City):void {

    this.router.navigate(['/products']);

    this.store.dispatch({
      type: CHANGE_CITY,
      payload: city
    });
  }

}
