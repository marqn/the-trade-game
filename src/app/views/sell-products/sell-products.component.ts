import {Component} from "@angular/core";
import {UserData} from "../../models/userdata";
import {Product} from "../../models/product";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {SELL_PRODUCT} from "../../actions/actions";
import {Router} from "@angular/router";

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


  constructor(private store:Store<Product>,
              private userDataStore:Store<UserData>,
              private router:Router) {
    this.observableProduct = store.select('selectedProduct');
    this.observableProduct.subscribe(v => {
      if (v) {
        this.product = v;
        this.rangeMax = v.onStore;
      }
    });

    this.observableUserData = userDataStore.select('game');
    /*
     this.observableUserData.subscribe(userData => {
     });
     */
  }

  sellProduct(product:Product):void {
    this.userDataStore.dispatch({
      type: SELL_PRODUCT,
      payload: {
        product: product,
        range: this.range
      }
    });
    this.router.navigate(['/products']);
  }


}
