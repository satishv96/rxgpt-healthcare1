
// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'home.component.html',
  styleUrl:'home.component.css'
})
export class HomeComponent {
  features: FeatureCard[] = [
    {
      icon: '❤️',
      title: 'Patient-Centered Care',
      description: 'Personalized healthcare solutions tailored to individual needs with AI-powered recommendations',
      color: 'rgba(239, 68, 68, 0.15)'
    },
    {
      icon: '🔒',
      title: 'HIPAA Compliant',
      description: 'Secure and encrypted data protection for all medical records with enterprise-grade security',
      color: 'rgba(34, 197, 94, 0.15)'
    },
    {
      icon: '🕐',
      title: '24/7 Availability',
      description: 'Round-the-clock access to healthcare professionals and support whenever you need it',
      color: 'rgba(59, 130, 246, 0.15)'
    },
    {
      icon: '👨‍⚕️',
      title: 'Expert Team',
      description: 'Certified medical professionals with years of experience in various specializations',
      color: 'rgba(168, 85, 247, 0.15)'
    }
  ];
}
