import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPasswordPageComponent } from './create-new-password-page.component';

describe('CreateNewPasswordPageComponent', () => {
  let component: CreateNewPasswordPageComponent;
  let fixture: ComponentFixture<CreateNewPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewPasswordPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
