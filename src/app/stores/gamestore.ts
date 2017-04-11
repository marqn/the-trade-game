import {UserData} from "../models/userdata";

export const game = (state:UserData = initGame(), action) => {
  switch (action.type) {
    case 'BUY_PRODUCT':
      return state;

    default:
      return state;
  }
};

export function initGame():UserData {

  console.log('initGame from store');

  return <UserData>{
    cash: 2000,
    debt: 2000,
    currentDay: 1,
    dayLimit: 60,
    currentCity: {
      id: 1,
      name: 'Warsaw'
    },
    store: {}
  };
}
