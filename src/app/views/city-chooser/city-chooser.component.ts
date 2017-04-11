import {Component, OnInit} from "@angular/core";
import {City} from "../../models/city";

@Component({
  selector: 'app-city-chooser',
  templateUrl: './city-chooser.component.html',
  styleUrls: ['./city-chooser.component.css']
})
export class CityChooserComponent implements OnInit {

  cities:Array<City> = [
    {id: 1, name: 'London'},
    {id: 2, name: 'Berlin'},
    {id: 3, name: 'Warsaw'},
    {id: 4, name: 'New York'},
    {id: 5, name: 'Tokyo'},
    {id: 6, name: 'Paris'},
    {id: 7, name: 'Ankara'},
    {id: 8, name: 'Bombay'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
