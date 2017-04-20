import {UserData} from "../models/userdata";
import {productFactory, Product} from "../models/product";
import {BUY_PRODUCT, CHANGE_CITY, NEW_GAME, SELL_PRODUCT, FINISH_GAME, CHANGE_DAY_LIMIT} from "../actions/actions";
import {CITIES} from "../mocks/mocks";

export const game = (state:UserData = initGame(), action) => {
  switch (action.type) {

    case NEW_GAME:
    {
      state = initGame(state);
      changePrizeForAllProducts(state.warehouse);
      return state;
    }

    case CHANGE_DAY_LIMIT:
    {
      state.dayLimit = action.payload;
      return state;
    }

    case CHANGE_CITY:
    {
      changePrizeForAllProducts(state.warehouse);
      watchGameProgress(state);
      watchEndGame(state);

      state.currentCity = action.payload;

      return Object.assign({}, state, action.payload);
    }

    case FINISH_GAME:
    {
      watchGameProgress(state);
      return state;
    }

    case BUY_PRODUCT:
    {
      if (action.payload) {
        updateProduct(BUY_PRODUCT, action.payload.product.id, action.payload.range, state);
        updateCash(BUY_PRODUCT, action.payload.product.prize, action.payload.range, state);
      }
      return state;
    }
    case SELL_PRODUCT:
    {
      if (action.payload) {
        updateCash(SELL_PRODUCT, action.payload.product.prize, action.payload.range, state);
        updateProduct(SELL_PRODUCT, action.payload.product.id, action.payload.range, state);
      }
      return state;
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

export function initGame(state:UserData = null):UserData {

  let userData:UserData;
  if (!state)
    userData = new UserData();
  else
    userData = state;

  let products:Array<Product> = [
    productFactory(1, 'Tobacco'),
    productFactory(2, 'Coffee'),
    productFactory(3, 'Tea'),
    productFactory(4, 'Spices')
  ];

  userData.cash = 2000;
  userData.debt = 2000;
  userData.storeCapacity = 100;
  userData.currentDay = 1;
  // userData.dayLimit = 5;

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

function updateProduct(action:String, productId:number, range:number, state:UserData):void {
  for (let i:number = 0; i < state.warehouse.length; i++) {
    let storeProduct:Product = state.warehouse[i];
    if (storeProduct.id == productId) {
      if (action == SELL_PRODUCT) {
        state.warehouse[i].onStore -= range;
        state.storeCapacity += range;
      }
      else if (action == BUY_PRODUCT) {
        state.warehouse[i].onStore += range;
        state.storeCapacity -= range;
      }
    }
  }
}

function updateCash(action:string, prize:number, range:number, state:UserData) {
  if (action === SELL_PRODUCT)
    state.cash += prize * range;
  else if (action === BUY_PRODUCT)
    state.cash -= prize * range;
}


function effortlessEnglishClub():void {
  
}
