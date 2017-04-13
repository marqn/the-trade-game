import {City} from "./city";
import {Product} from "./product";
export class UserData {

//account
  id:string;
  loginName:string;

// game
  cash:number;
  debt:number;
  currentDay:number;
  dayLimit:number;
  currentCity:City;

  warehouse:Array<Product>;

  isEndGame:boolean;

}
