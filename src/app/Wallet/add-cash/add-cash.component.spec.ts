import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCashComponent } from './add-cash.component';

describe('AddCashComponent', () => {
  let component: AddCashComponent;
  let fixture: ComponentFixture<AddCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
