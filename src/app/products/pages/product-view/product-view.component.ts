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

  constructor() { }

  ngOnInit(): void {
  }

}
