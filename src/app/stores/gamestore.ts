import {UserData} from "../models/userdata";
import {productFactory, Product} from "../models/product";
import {City} from "../models/city";
import {BUY_PRODUCT, CHANGE_CITY} from "../actions/actions";

export const game = (state:UserData = initGame(), action) => {
  switch (action.type) {

    case CHANGE_CITY:
    {
      changePrizeForAllProducts(state.warehouse);
      state.currentDay++;
      state.dayLimit--;
      state.currentCity = action.payload;
      return Object.assign({}, state, action.payload);
    }

    case BUY_PRODUCT:
    {
      return Object.assign({}, state, action.payload);
    }

    default:
      return state;
  }
};

export function initGame():UserData {

  let userData:UserData = new UserData();
  let products:Array<Product> = [
    productFactory(1, 'Tobacco'),
    productFactory(2, 'Coffee'),
    productFactory(3, 'Tea'),
    productFactory(4, 'Spices')
  ];
 
  userData.cash = 2000;
  userData.debt = 2000;
  userData.currentDay = 1;
  userData.dayLimit = 10;

  userData.currentCity = <City>{id: 1, name: 'London'};
  userData.warehouse = products;

  return userData;
}

function changePrizeForAllProducts(products:Array<Product>, min:number = 1, max:number = 100):void {
  for (let item of products) { 
    item.prize = Math.random() * (max - min) + min;
  }
}
