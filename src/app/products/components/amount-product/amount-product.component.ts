import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-amount-product',
  templateUrl: './amount-product.component.html',
  styleUrls: ['./amount-product.component.scss']
})
export class AmountProductComponent implements OnInit {
  @Input() amount: number = 1;
  @Output() changeAmount = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  public onAddLeastAmount(action: any) {
    this.changeAmount.emit(action);
  }

}
