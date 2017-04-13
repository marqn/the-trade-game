import {UserData} from "../models/userdata";
import {productFactory, Product} from "../models/product";
import {BUY_PRODUCT, CHANGE_CITY, NEW_GAME} from "../actions/actions";
import {CITIES} from "../mocks/mocks";

export const game = (state:UserData = initGame(), action) => {
  switch (action.type) {

    case CHANGE_CITY:
    {
      changePrizeForAllProducts(state.warehouse);
      watchGameProgress(state);
      watchEndGame(state);

      state.currentCity = action.payload;

      return Object.assign({}, state, action.payload);
    }

    case NEW_GAME:
    {
      console.log('NEW_GAME');
      state = initGame();
      changePrizeForAllProducts(state.warehouse);
    }

    case BUY_PRODUCT:
    {
      return Object.assign({}, state, action.payload);
    }

    default:
      return state;
  }
};

function watchGameProgress(state:UserData):void {
  state.currentDay++;
  state.dayLimit--;
}

function watchEndGame(state:UserData):void {
  if (state.dayLimit <= 0) {
    state.isEndGame = true;
  }
}

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
  userData.dayLimit = 3;

  userData.currentCity = CITIES[0];
  userData.warehouse = products;
  userData.isEndGame = false;

  return userData;
}

function changePrizeForAllProducts(products:Array<Product>, min:number = 1, max:number = 100):void {
  for (let item of products) {
    item.prize = Math.random() * (max - min) + min;
  }
}
