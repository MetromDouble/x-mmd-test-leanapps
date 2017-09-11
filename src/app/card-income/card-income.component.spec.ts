import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIncomeComponent } from './card-income.component';

describe('CardIncomeComponent', () => {
  let component: CardIncomeComponent;
  let fixture: ComponentFixture<CardIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
