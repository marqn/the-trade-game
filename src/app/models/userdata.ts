import {City} from "./city";
import {Product} from "./product";
export interface UserData {

//account
  id:string;
  loginName:string;

// game
  cash:number;
  debt:number;
  currentDay:number;
  dayLimit:number;
  currentCity:City;

  store:Array<Product>;

}
