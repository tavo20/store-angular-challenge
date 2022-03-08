import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildImgComponent } from './view-child-img.component';

describe('ViewChildImgComponent', () => {
  let component: ViewChildImgComponent;
  let fixture: ComponentFixture<ViewChildImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
