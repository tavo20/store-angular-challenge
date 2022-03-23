import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-child-img',
  templateUrl: './view-child-img.component.html',
  styleUrls: ['./view-child-img.component.scss']
})
export class ViewChildImgComponent implements OnInit {

  @Input() image: string = '';
  @Input() indexImage: number = 0;
  @Output() changeImage = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public onChangeImage() {
    this.changeImage.emit({
      index: this.indexImage
    });
  }

}
