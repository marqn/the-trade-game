import { Component, OnInit } from '@angular/core';
import {UserData} from "../../models/userdata";
import {Product} from "../../models/product";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sell-products',
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent {

  range:number = 0;
  rangeMax:number;

  product:Product = new Product();

  observableProduct:Observable<Product>;
  observableUserData:Observable<UserData>;


  constructor(private store:Store<Product>, private userDataStore:Store<UserData>) {
    this.observableProduct = store.select('selectedProduct');
    this.observableProduct.subscribe(v => {
      if (v)
        this.product = v;
    });

    this.observableUserData = userDataStore.select('game');
    this.observableUserData.subscribe(userData => {
      if (userData) {
        console.log(userData);
        this.rangeMax = Math.round(userData.cash / this.product.prize);
      }
    });
  }

}
