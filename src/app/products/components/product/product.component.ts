import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  public onGoViewDetail() {
    this.router.navigate(['products/product-view', this.product.id]);
  }

  public onAddCart() {
    console.log('add cart');
  }

}
