import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkInProgressComponent } from '../../../core/shared/work-in-progress/work-in-progress.component';
import { StickyBottomDemoComponent } from '../sticky-bottom-demo/sticky-bottom-demo.component';


@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [WorkInProgressComponent, StickyBottomDemoComponent],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffComponent {

}
