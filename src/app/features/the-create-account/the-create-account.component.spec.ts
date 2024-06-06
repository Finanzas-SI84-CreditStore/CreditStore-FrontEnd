import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCreateAccountComponent } from './the-create-account.component';

describe('TheCreateAccountComponent', () => {
  let component: TheCreateAccountComponent;
  let fixture: ComponentFixture<TheCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheCreateAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
