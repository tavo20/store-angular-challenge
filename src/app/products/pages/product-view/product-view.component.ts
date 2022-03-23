import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  public imagesChild: string[] = [
    './assets/imgs/products/image-product-1-thumbnail.jpg',
    './assets/imgs/products/image-product-2-thumbnail.jpg',
    './assets/imgs/products/image-product-3-thumbnail.jpg',
    './assets/imgs/products/image-product-4-thumbnail.jpg',
  ];
  public imagesMain: string[] = [
    './assets/imgs/products/image-product-1.jpg',
    './assets/imgs/products/image-product-2.jpg',
    './assets/imgs/products/image-product-3.jpg',
    './assets/imgs/products/image-product-4.jpg',
  ];
  /** How many products does the user want */
  public amountProduct: number = 0;
  /** Main image */
  public imageProduct: string = this.imagesMain[0];

  public currentPositionMainImage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onChangeAmount(event: any) {
    if(event === 'least') {
      if(this.amountProduct === 1) {
        return
      }
      this.amountProduct--;
      return
    }
    this.amountProduct++;
  }

  public onChangeImageMain(event: any) {
    this.imageProduct = this.imagesMain[event.index];
    this.currentPositionMainImage = event.index;
  }

}
