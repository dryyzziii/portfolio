import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillstreeComponent } from './skillstree.component';

describe('SkillstreeComponent', () => {
  let component: SkillstreeComponent;
  let fixture: ComponentFixture<SkillstreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillstreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillstreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
