import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-child-img',
  templateUrl: './view-child-img.component.html',
  styleUrls: ['./view-child-img.component.scss']
})
export class ViewChildImgComponent implements OnInit, AfterViewInit {
  /** Sring of the image */
  @Input() image: string = '';
  /** Position the image in the ayyrray */
  @Input() indexImage: number = 0;

  currentPositionMainImage: number = 0;
  /** We create this to use ref to put the class */
  public refBackground: string = '';

  // Watch out changes in the current image
  @Input('currentPositionMainImage') 
    set changeImageCurrent(indexCurrent: number) {
      let imageNode = document.getElementById(this.indexImage + '');
      let back = document.getElementById(this.refBackground);
      if(indexCurrent === this.indexImage) {
          imageNode?.classList.add('current-img');
          if(back) {
            back.classList.add('back-img');
          }
      } else {
          imageNode?.classList.remove('current-img', 'back');
          back?.classList.remove('back-img');
      }
  }

  currentPositionImage: boolean = false;
  /** To change image */
  @Output() changeImage = new EventEmitter();
  constructor() { 

  }

  ngOnInit(): void {
   this.refBackground = 'background-img' + this.indexImage;
  }

  ngAfterViewInit() {
    // Select first image CSS.
    if(this.indexImage === 0) this.selectCurrentImage();

  }

  // Choice first image and put the class
  selectCurrentImage() {
    if(this.currentPositionMainImage === this.indexImage) {
      let imageNode = document.getElementById(this.indexImage + '');
      imageNode?.classList.add('current-img');
      let back = document.getElementById(this.refBackground);
      back?.classList.add('back-img');
    }
  }


  /**
   * Output to comunicate change the main image
   */
  public onChangeImage() {
    this.changeImage.emit({
      index: this.indexImage
    });
  }

}
