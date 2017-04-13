import {SELECTED_PRODUCT} from "../actions/actions";
import {Product} from "../models/product";

export const selectedProduct = (state:Product, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return Object.assign({}, state, action.payload);


    default:
      return state;
  }
};
