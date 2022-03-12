import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  public imagesChild: String[] = [
    './assets/imgs/products/image-product-1-thumbnail.jpg',
    './assets/imgs/products/image-product-1-thumbnail.jpg',
    './assets/imgs/products/image-product-1-thumbnail.jpg',
    './assets/imgs/products/image-product-1-thumbnail.jpg',
  ];
  public amountProduct: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onChangeAmount(event: any) {
    console.log(event);
  

    if(event === 'least') {

      if(this.amountProduct === 0) {
        return
      }
      
      this.amountProduct--;
      return
    }
    
    this.amountProduct++;
  }

}
