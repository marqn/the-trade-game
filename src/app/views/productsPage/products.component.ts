import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<any> = [
    'Tobacco',
    'Coffee',
    'Tea',
    'Spices'
  ];

  constructor() {}
  ngOnInit() {}

  priceGenerator(min:number = 1, max:number = 100):number {
    return Math.random() * (max - min) + min ;
  }

}
