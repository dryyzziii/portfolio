import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsLigneComponent } from './projets-ligne.component';

describe('ProjetsLigneComponent', () => {
  let component: ProjetsLigneComponent;
  let fixture: ComponentFixture<ProjetsLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetsLigneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetsLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
