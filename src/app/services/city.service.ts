import {Injectable} from "@angular/core";
import {City} from "../models/city";
import {CITIES} from "../mocks/mocks";

@Injectable()
export class CityService {

  constructor() {}

  getCities():Array<City> {
    return CITIES;
  }

}
