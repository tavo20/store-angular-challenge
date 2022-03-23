import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-view-main-img',
  templateUrl: './view-main-img.component.html',
  styleUrls: ['./view-main-img.component.scss']
})
export class ViewMainImgComponent implements OnInit, OnChanges {
  // On change to Input
  imageMain: string = '';
  @Input('imageMain')
    set changeImg(newImg: string) {
      this.imageMain = newImg;
  } 

  @Input() imageMainOtherTest: string = '';
  @Output() viewBigMainImage = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {
  }

  // Other option to detect change in the Inputs
  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      // this.imageMain = changes.changeImg.currentValue + '';
    }
  }

  onChangeImageView() {
    this.viewBigMainImage.emit({
      image: this.imageMain
    })
  }
  

}
