import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionCardComponent } from './competence-card.component';

describe('PassionCardComponent', () => {
  let component: PassionCardComponent;
  let fixture: ComponentFixture<PassionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
