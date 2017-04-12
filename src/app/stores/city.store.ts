import {City} from "../models/city";
import {CHANGE_CITY} from "../actions/actions";

export interface CityStore {
  selectedCity:City;
}

export const cityStore = (store:CityStore, action) => {
  switch (action.type) {
    case CHANGE_CITY:
    {
      return store;
    }
  }
}
