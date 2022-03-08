import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMainImgComponent } from './view-main-img.component';

describe('ViewMainImgComponent', () => {
  let component: ViewMainImgComponent;
  let fixture: ComponentFixture<ViewMainImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMainImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMainImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
