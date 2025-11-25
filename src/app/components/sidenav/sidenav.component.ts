// sidenav.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  icon: string;
  label: string;
  route: string;
  badge?: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'sidenav.component.html',
  styleUrl:'sidenav.component.css'
})
export class SidenavComponent {
  @Input() isCollapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();

  navItems: NavItem[] = [
    { icon: '🏠', label: 'Home page', route: '/home' },
    { icon: '💬', label: 'General Enquiry', route: '/enquiry', badge: '3' },
    { icon: '📅', label: 'Book Your Doctor', route: '/book' },
    { icon: '🔐', label: 'Login & Register', route: '/auth' },
    { icon: '📊', label: 'Lab Report Analyse ', route: '/reportAnalyse' },
    { icon: '❓', label: 'May I help you', route: '/help' },
    { icon: '👥', label: 'Hospital Staff', route: '/staff' },    
    { icon: 'ℹ️', label: 'About', route: '/about' }
  ];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }
}