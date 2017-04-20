import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Product} from "../../models/product";
import {UserData} from "../../models/userdata";
import {BUY_PRODUCT} from "../../actions/actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buy',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.css']
})
export class BuyComponent implements OnInit {

  isBuy:boolean = true;

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
      if (v)
        this.product = v;
    });

    this.observableUserData = userDataStore.select('game');
    this.observableUserData.subscribe(userData => {
      if (userData) {
        this.rangeMax = Math.trunc(userData.cash / this.product.prize);
        if(this.rangeMax > userData.storeCapacity)
        {
          this.rangeMax = userData.storeCapacity;
        }
      }
    });
  }

  saveProduct(product:Product):void {
    this.userDataStore.dispatch({
      type: BUY_PRODUCT,
      payload: {
        product: product,
        range: this.range
      }
    });
    this.router.navigate(['/products']);
  }

  ngOnInit() {
  }

}
