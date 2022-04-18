import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main/main.service';

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

  // view modal images
  public viewMdlImages: boolean = false;

  public imgMdlSelected: string = '';

  public currentIndexMdlImage: number = 0;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('keydown', (e: any) => {
      if((e.key=='Escape'|| e.key=='Esc'|| e.keyCode==27) && (e.target.nodeName=='BODY')){
          e.preventDefault();
          this.viewMdlImages = false;
      }
  }, true);
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

  public onViewMainImage(event: any) {
    let index = this.imagesMain.findIndex((image) => image === event.image);
    this.currentIndexMdlImage = index;
    this.imgMdlSelected = this.imagesMain[index];
    this.viewMdlImages = true;
  }

  public onNextImage(action: string, event: any) {
    event.stopPropagation();
    if(action === 'left') {
      if( this.currentIndexMdlImage === 0) return
      this.imgMdlSelected = this.imagesMain[this.currentIndexMdlImage - 1];
      this.currentIndexMdlImage -= 1
    } else {
      if(this.currentIndexMdlImage === (this.imagesMain.length - 1) ) return
      this.imgMdlSelected = this.imagesMain[this.currentIndexMdlImage + 1];
      this.currentIndexMdlImage++

    }
  }

  public onMainBackgroundMdl(event:any) {
    this.viewMdlImages = false;
  }

}
