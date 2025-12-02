import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home-pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'enquiry',
    loadComponent: () => import('./modules/home-pages/enquiry/enquiry.component').then(m => m.EnquiryComponent)
  },
  {
    path: 'book',
    loadComponent: () => import('./modules/home-pages/book/book.component').then(m => m.BookComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./core/auth/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'help',
    loadComponent: () => import('./modules/home-pages/help/help.component').then(m => m.HelpComponent)
  },
  {
    path: 'staff',
    loadComponent: () => import('./modules/home-pages/staff/staff.component').then(m => m.StaffComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./modules/home-pages/about/about.component').then(m => m.AboutComponent)
  },

  {
    path: 'forgot-password',
    loadComponent: () => import('./core/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'queryResponse',
    loadComponent: () => import('./modules/rxGpt/query-response/query-response.component').then(m => m.QueryResponseComponent)
  },
  {
    path: 'reportAnalyse',
    loadComponent: () => import('./modules/home-pages/lab-report-analyse/lab-report-analyse.component').then(m => m.LabReportAnalyseComponent)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
