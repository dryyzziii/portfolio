import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectpresentationComponent } from './projectpresentation.component';

describe('ProjectpresentationComponent', () => {
  let component: ProjectpresentationComponent;
  let fixture: ComponentFixture<ProjectpresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectpresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
