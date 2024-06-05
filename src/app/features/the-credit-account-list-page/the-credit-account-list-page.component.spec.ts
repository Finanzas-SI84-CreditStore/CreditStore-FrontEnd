import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCreditAccountListPageComponent } from './the-credit-account-list-page.component';

describe('TheCreditAccountListPageComponent', () => {
  let component: TheCreditAccountListPageComponent;
  let fixture: ComponentFixture<TheCreditAccountListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheCreditAccountListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheCreditAccountListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
