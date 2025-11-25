
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-work-in-progress',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work-in-progress.component.html',
  styleUrl: './work-in-progress.component.css'
})
export class WorkInProgressComponent {
  @Input() title = 'Work in Progress';
  @Input() subtitle = 'We\'re building something amazing!';
  @Input() description = 'This page is currently under construction. Our team is working hard to bring you an exceptional experience.';
  @Input() statusText = 'Under Development';
  @Input() showFeatures = true;
  @Input() showProgress = true;
  @Input() progressPercentage = 65;
  @Input() showNotifyButton = true;
  @Input() showBackButton = true;
  @Input() showContact = true;
  @Input() contactEmail = 'support@rxgpthealthcare.com';

  upcomingFeatures = [
    'Enhanced Lab Report Analysis with real-time updates',
    'AI-powered Lab Analysis',
    'Integrated appointment scheduling'
  ];

  onNotify(): void {
    console.log('User wants to be notified');
    // Implement notification signup
    alert('Thank you! We\'ll notify you when this feature is ready.');
  }
}