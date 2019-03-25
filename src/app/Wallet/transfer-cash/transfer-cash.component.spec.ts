import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferCashComponent } from './transfer-cash.component';

describe('TransferCashComponent', () => {
  let component: TransferCashComponent;
  let fixture: ComponentFixture<TransferCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
