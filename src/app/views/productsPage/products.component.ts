import {Component, OnInit} from "@angular/core";
import {Product} from "../../models/product";
import {Store} from "@ngrx/store";
import {UserData} from "../../models/userdata";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<Product>;
  productsStore:Observable<UserData>;

  constructor(private store:Store<UserData>) {
    this.productsStore = store.select('game');
    this.productsStore.subscribe(v => {
      this.products = v.warehouse;
    });
  }

  ngOnInit() {
  }

}
