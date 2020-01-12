import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiredcustomerComponent } from './enquiredcustomer.component';

describe('EnquiredcustomerComponent', () => {
  let component: EnquiredcustomerComponent;
  let fixture: ComponentFixture<EnquiredcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiredcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiredcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
