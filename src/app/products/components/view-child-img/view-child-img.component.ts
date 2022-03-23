import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-child-img',
  templateUrl: './view-child-img.component.html',
  styleUrls: ['./view-child-img.component.scss']
})
export class ViewChildImgComponent implements OnInit, AfterViewInit {

  @Input() image: string = '';
  @Input() indexImage: number = 0;

  currentPositionMainImage: number = 0;
  @Input('currentPositionMainImage') 
    set changeImageCurrent(indexCurrent: number) {
      console.log(indexCurrent, this.indexImage );
      let imageNode = document.getElementById(this.indexImage + '');
      if(indexCurrent === this.indexImage) {
        console.log('imageNode, ', imageNode);
          imageNode?.classList.add('current-img');
      } else {
        imageNode?.classList.remove('current-img');
      }
  }

  currentPositionImage: boolean = false;

  @Output() changeImage = new EventEmitter();
  constructor() { 

  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    if(this.indexImage === 0)  this.selectCurrentImage();

  }

  selectCurrentImage() {
    if(this.currentPositionMainImage === this.indexImage) {
      let imageNode = document.getElementById(this.indexImage + '');
        imageNode?.classList.add('current-img');
    }
  }



  public onChangeImage() {
    this.changeImage.emit({
      index: this.indexImage
    });
  }

}
