import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIUTComponent } from './card-iut.component';

describe('CardIUTComponent', () => {
  let component: CardIUTComponent;
  let fixture: ComponentFixture<CardIUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIUTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardIUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
