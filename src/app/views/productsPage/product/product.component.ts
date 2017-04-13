import {Component, OnInit, Input} from "@angular/core";
import {Product} from "../../../models/product";
import {Observable} from "rxjs/Observable";
import {SELECTED_PRODUCT} from "../../../actions/actions";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem:Observable<Product>;

  constructor(private store:Store<Product>, private router:Router) {

  }

  ngOnInit() {
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
