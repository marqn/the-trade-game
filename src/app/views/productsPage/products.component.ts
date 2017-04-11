import {Component, OnInit} from "@angular/core";
import {Product, productFactory} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<any> = [
    productFactory(1, 'Tobacco', this.priceGenerator()),
    productFactory(2, 'Coffee', this.priceGenerator()),
    productFactory(3, 'Tea', this.priceGenerator()),
    productFactory(4, 'Spices', this.priceGenerator())
  ];

  constructor() {}
  ngOnInit() {}

  priceGenerator(min:number = 1, max:number = 100):number {
    return Math.random() * (max - min) + min ;
  }

}
