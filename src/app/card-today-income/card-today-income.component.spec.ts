import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTodayIncomeComponent } from './card-today-income.component';

describe('CardTodayIncomeComponent', () => {
  let component: CardTodayIncomeComponent;
  let fixture: ComponentFixture<CardTodayIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTodayIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTodayIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
