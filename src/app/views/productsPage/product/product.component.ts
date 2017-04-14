import {Component, OnInit, Input} from "@angular/core";
import {Product} from "../../../models/product";
import {Observable} from "rxjs/Observable";
import {SELECTED_PRODUCT} from "../../../actions/actions";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {UserData} from "../../../models/userdata";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem:Product;
  productStore:Observable<UserData>;
  buyBtnDisabled:boolean;
  sellBtnDisabled:boolean;
  cash:number;

  constructor(private store:Store<UserData>, private router:Router) {
    this.productStore = store.select('game');
    this.productStore.subscribe(v => {
      this.cash = v.cash;
    });
  }

  ngOnInit() {
    if ((this.cash / this.productItem.prize) < 1)
      this.buyBtnDisabled = true;

    if (this.productItem.onStore == 0)
      this.sellBtnDisabled = true;
  }

  selectProduct(item:Product, operation:string):void {

    this.store.dispatch({
      type: SELECTED_PRODUCT,
      payload: item
    });

    if (operation === 'buy')
      this.router.navigate(['/buy']);
    else if (operation === 'sell')
      this.router.navigate(['/sell']);
  }
}
