
// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  showPassword = false;
  identifierFocused = false;
  passwordFocused = false;

  features = [
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your health data is encrypted with military-grade security and HIPAA compliance.'
    },
    {
      icon: '⚡',
      title: 'AI-Powered',
      description: 'Get instant insights and recommendations powered by advanced AI technology.'
    },
    {
      icon: '👨‍⚕️',
      title: 'Expert Care',
      description: 'Connect with certified healthcare professionals 24/7 from anywhere.'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.loginForm.get(fieldName);
    if (field?.hasError('required')) {
      return `${fieldName === 'identifier' ? 'Email or phone' : 'Password'} is required`;
    }
    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `Must be at least ${minLength} characters`;
    }
    return '';
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Login data:', this.loginForm.value);
        this.isLoading = false;
        this.router.navigate(['/home']);
      }, 2000);
    } else {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }

  signInWithGoogle(): void {
    console.log('Sign in with Google');
    // Implement Google OAuth
  }

  signInWithFacebook(): void {
    console.log('Sign in with Facebook');
    // Implement Facebook OAuth
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
  