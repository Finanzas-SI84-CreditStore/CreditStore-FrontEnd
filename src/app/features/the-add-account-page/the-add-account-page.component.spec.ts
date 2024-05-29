import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAddAccountPageComponent } from './the-add-account-page.component';

describe('TheAddAccountPageComponent', () => {
  let component: TheAddAccountPageComponent;
  let fixture: ComponentFixture<TheAddAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheAddAccountPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheAddAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
