import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountProductComponent } from './amount-product.component';

describe('AmountProductComponent', () => {
  let component: AmountProductComponent;
  let fixture: ComponentFixture<AmountProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
