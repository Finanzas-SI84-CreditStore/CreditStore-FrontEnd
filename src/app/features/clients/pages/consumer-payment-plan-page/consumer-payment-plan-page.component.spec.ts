import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPaymentPlanPageComponent } from './consumer-payment-plan-page.component';

describe('ConsumerPaymentPlanPageComponent', () => {
  let component: ConsumerPaymentPlanPageComponent;
  let fixture: ComponentFixture<ConsumerPaymentPlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerPaymentPlanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerPaymentPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
