import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLoginPageComponent } from './the-login-page.component';

describe('TheLoginPageComponent', () => {
  let component: TheLoginPageComponent;
  let fixture: ComponentFixture<TheLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheLoginPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
