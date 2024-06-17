import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPortComponent } from './header-port.component';

describe('HeaderPortComponent', () => {
  let component: HeaderPortComponent;
  let fixture: ComponentFixture<HeaderPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
