import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface QuickTopic {
  label: string;
  icon: string;
}

interface Service {
  title: string;
  desc: string;
  details: string;
  icon: string;
  keywords: string[];
}

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(private router: Router) {}

  query: string = '';
  expandedIndex: number | null = null;
  showHelpNote = false;
  showActionNote = false;

  workingOnTopic = '';
  workingIconClass = '';

  suggestions: string[] = [];
  recentSearches: string[] = [];

 quickTopics: QuickTopic[] = [
  { label: 'Visiting Hours',       icon: 'ri-calendar-line' },
  { label: 'Emergency Services',   icon: 'ri-alarm-warning-line' },
  { label: 'Book Appointment',     icon: 'ri-calendar-check-line' },
  { label: 'Insurance Support',    icon: 'ri-shield-check-line' },
  { label: 'Lab Tests & Reports',  icon: 'ri-flask-line' },
  { label: 'Contact Support',      icon: 'ri-customer-service-2-line' }
];

  services: Service[] = [
    {
      title: 'Cardiology',
      desc: 'Heart specialists',
      details: 'We offer advanced cardiac care, ECG, angiography, heart surgery consultation and continuous monitoring for heart patients.',
      icon: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
      keywords: ['heart', 'cardio', 'chest pain', 'bp', 'pulse']
    },
    {
      title: 'Orthopedics',
      desc: 'Bone & joint care',
      details: 'Specialized doctors for fractures, joint pain, knee replacement, sports injuries and physiotherapy guidance.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2995/2995430.png',
      keywords: ['bone', 'joint', 'knee', 'back pain', 'fracture']
    },
    {
      title: 'Ophthalmology',
      desc: 'Eye treatments',
      details: 'Treatments for cataract, retina, glaucoma, vision correction and complete eye check-ups.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
      keywords: ['eye', 'vision', 'cataract', 'blurry', 'spectacles']
    },
    {
      title: 'Neurology',
      desc: 'Brain & nerves care',
      details: 'Neurological testing and treatment for migraine, seizures, stroke, nerve weakness and memory issues.',
      icon: 'https://cdn-icons-png.flaticon.com/512/4320/4320406.png',
      keywords: ['brain', 'headache', 'migraine', 'seizure', 'stroke']
    },
    {
      title: 'Dermatology',
      desc: 'Skin & hair care',
      details: 'Skin treatment for acne, allergies, infections and hair fall management.',
      icon: 'https://cdn-icons-png.flaticon.com/512/3198/3198313.png',
      keywords: ['skin', 'rash', 'acne', 'allergy', 'hair', 'hair fall']
    },
    {
      title: 'Pediatrics',
      desc: 'Child specialists',
      details: 'Child vaccination, growth monitoring, nutrition guidance and illness management for children.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920663.png',
      keywords: ['child', 'kids', 'baby', 'vaccine', 'pediatric']
    }
  ];

  filteredServices: Service[] = [];

  ngOnInit(): void {
    this.filteredServices = [...this.services];
    this.loadRecentSearches();
  }

  // ---- SEARCH LOGIC ----

  onSearchChange(value: string) {
    this.query = value;
    this.updateSuggestions();
  }

  updateFilteredServices() {
    const q = this.query.trim().toLowerCase();

    if (!q) {
      this.filteredServices = [...this.services];
      return;
    }

    this.filteredServices = this.services.filter(s => {
      const haystack = (
        s.title + ' ' +
        s.desc + ' ' +
        s.details + ' ' +
        s.keywords.join(' ')
      ).toLowerCase();
      return haystack.includes(q);
    });
  }

  updateSuggestions() {
    const q = this.query.trim().toLowerCase();

    if (q.length < 2) {
      this.suggestions = [];
      return;
    }

    const matchedTitles = this.services
      .filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.keywords.some(k => k.toLowerCase().includes(q))
      )
      .map(s => s.title);

    this.suggestions = Array.from(new Set(matchedTitles)).slice(0, 5);
  }

  applySuggestion(s: string) {
    this.query = s;
    this.suggestions = [];
    this.updateFilteredServices();
  }

  // ---- RECENT SEARCHES ----

  private saveRecentSearch(query: string) {
    const trimmed = query.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    this.recentSearches = [
      trimmed,
      ...this.recentSearches.filter(q => q.toLowerCase() !== lower)
    ].slice(0, 5);

    localStorage.setItem('recentEnquirySearches', JSON.stringify(this.recentSearches));
  }

  private loadRecentSearches() {
    try {
      const data = localStorage.getItem('recentEnquirySearches');
      if (data) {
        this.recentSearches = JSON.parse(data);
      }
    } catch {
      this.recentSearches = [];
    }
  }

  clearRecentSearches() {
    this.recentSearches = [];
    localStorage.removeItem('recentEnquirySearches');
  }

  askGenie() {
    const trimmed = this.query.trim();
    if (trimmed) {
      this.saveRecentSearch(trimmed);
      this.updateFilteredServices();
    }
  }

  toggleExpand(i: number) {
    this.expandedIndex = this.expandedIndex === i ? null : i;
  }

  openService(name: string) {
    this.router.navigate(['/queryResponse'], { queryParams: { service: name } });
  }

  goToQueryResponse() {
    this.router.navigate(['/queryResponse']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  showHelpMessage() {
    this.showHelpNote = true;
    setTimeout(() => this.showHelpNote = false, 3000);
  }

  showWorkingMessage(topic: string) {
    const selected = this.quickTopics.find(t => t.label === topic);
    if (selected) {
      this.workingOnTopic = selected.label;
      this.workingIconClass = selected.icon.replace('-line', '-fill');
      this.showActionNote = true;
      setTimeout(() => this.showActionNote = false, 3000);
    }
  }
}
