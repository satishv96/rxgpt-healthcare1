import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkInProgressComponent } from '../../../core/shared/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [WorkInProgressComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpComponent {

}
