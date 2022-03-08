import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-main-img',
  templateUrl: './view-main-img.component.html',
  styleUrls: ['./view-main-img.component.scss']
})
export class ViewMainImgComponent implements OnInit {
  @Input() refIMG: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
