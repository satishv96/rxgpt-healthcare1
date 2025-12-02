import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkInProgressComponent } from '../../../core/shared/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-lab-report-analyse',
  standalone: true,
  imports: [WorkInProgressComponent],
  templateUrl: './lab-report-analyse.component.html',
  styleUrl: './lab-report-analyse.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LabReportAnalyseComponent {

}
