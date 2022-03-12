import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-product',
  templateUrl: './title-product.component.html',
  styleUrls: ['./title-product.component.scss']
})
export class TitleProductComponent implements OnInit {
  @Input() name: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.name);
  }

}
