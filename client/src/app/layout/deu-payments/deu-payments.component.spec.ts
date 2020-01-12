import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuPaymentsComponent } from './deu-payments.component';

describe('DeuPaymentsComponent', () => {
  let component: DeuPaymentsComponent;
  let fixture: ComponentFixture<DeuPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
