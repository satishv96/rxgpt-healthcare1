// sticky-bottom-demo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sticky-bottom-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sticky-bottom-demo.component.html',
  styleUrl: './sticky-bottom-demo.component.css'
})
export class StickyBottomDemoComponent {
  showActionBar = true;
  showFAB = true;
  showChatWidget = true;
  showCookieBanner = true;
  unreadMessages = 3;
  isChatOpen = false;

  handleAction(): void {
    console.log('Action button clicked');
    alert('Support contacted!');
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      this.unreadMessages = 0;
    }
    console.log('Chat toggled:', this.isChatOpen);
  }

  acceptCookies(): void {
    this.showCookieBanner = false;
    console.log('Cookies accepted');
  }

  declineCookies(): void {
    this.showCookieBanner = false;
    console.log('Cookies declined');
  }
}
