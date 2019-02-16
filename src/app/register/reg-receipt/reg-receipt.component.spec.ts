import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegReceiptComponent } from './reg-receipt.component';

describe('RegReceiptComponent', () => {
  let component: RegReceiptComponent;
  let fixture: ComponentFixture<RegReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
