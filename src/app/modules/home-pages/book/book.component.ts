import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkInProgressComponent } from '../../../core/shared/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [WorkInProgressComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookComponent {

}
