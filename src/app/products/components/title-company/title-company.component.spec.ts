import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCompanyComponent } from './title-company.component';

describe('TitleCompanyComponent', () => {
  let component: TitleCompanyComponent;
  let fixture: ComponentFixture<TitleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
