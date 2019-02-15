import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayResDialogComponent } from './pay-res-dialog.component';

describe('PayResDialogComponent', () => {
  let component: PayResDialogComponent;
  let fixture: ComponentFixture<PayResDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayResDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayResDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
