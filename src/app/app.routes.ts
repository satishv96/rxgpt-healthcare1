import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'enquiry',
    loadComponent: () => import('./pages/enquiry/enquiry.component').then(m => m.EnquiryComponent)
  },
  {
    path: 'book',
    loadComponent: () => import('./pages/book/book.component').then(m => m.BookComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'help',
    loadComponent: () => import('./pages/help/help.component').then(m => m.HelpComponent)
  },
  {
    path: 'staff',
    loadComponent: () => import('./pages/staff/staff.component').then(m => m.StaffComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },

  {
    path: 'forgot-password',
    loadComponent: () => import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
