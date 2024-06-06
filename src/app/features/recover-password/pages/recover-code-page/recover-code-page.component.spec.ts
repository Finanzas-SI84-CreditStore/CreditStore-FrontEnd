import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverCodePageComponent } from './recover-code-page.component';

describe('RecoverCodePageComponent', () => {
  let component: RecoverCodePageComponent;
  let fixture: ComponentFixture<RecoverCodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverCodePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoverCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
