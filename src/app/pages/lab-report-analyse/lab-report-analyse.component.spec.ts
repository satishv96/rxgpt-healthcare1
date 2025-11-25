import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReportAnalyseComponent } from './lab-report-analyse.component';

describe('LabReportAnalyseComponent', () => {
  let component: LabReportAnalyseComponent;
  let fixture: ComponentFixture<LabReportAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabReportAnalyseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabReportAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
