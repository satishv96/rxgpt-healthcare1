import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [],
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent {

  constructor(private router: Router) {}
  
   ngOnInit(): void {    
   this.router.navigate(['queryResponse']);
  }
  
}
