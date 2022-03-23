import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-product',
  templateUrl: './price-product.component.html',
  styleUrls: ['./price-product.component.scss']
})
export class PriceProductComponent implements OnInit {
  @Input() price: number = 0;
  @Input() percentage: string = '';
  @Input() oldPrice: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
