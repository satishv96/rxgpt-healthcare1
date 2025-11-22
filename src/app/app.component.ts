// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidenavComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl:'app.component.html',
  styleUrl:'app.component.css'
})
export class AppComponent {
  isSidenavCollapsed = false;

  toggleSidenav() {
    this.isSidenavCollapsed = !this.isSidenavCollapsed;
  }

  onSidenavCollapse(collapsed: boolean) {
    this.isSidenavCollapsed = collapsed;
  }
}