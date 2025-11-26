import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyBottomDemoComponent } from './sticky-bottom-demo.component';

describe('StickyBottomDemoComponent', () => {
  let component: StickyBottomDemoComponent;
  let fixture: ComponentFixture<StickyBottomDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyBottomDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyBottomDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
