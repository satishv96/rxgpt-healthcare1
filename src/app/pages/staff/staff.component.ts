import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkInProgressComponent } from "../../components/work-in-progress/work-in-progress.component";

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [WorkInProgressComponent],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffComponent {

}
