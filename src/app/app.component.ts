// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { SidenavComponent } from './core/shared/sidenav/sidenav.component';
// import { HeaderComponent } from './core/shared/header/header.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { TopnavComponent } from "./core/shared/topnav/topnav.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // SidenavComponent,
    // HeaderComponent,
    FooterComponent,
    TopnavComponent
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