// signup.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  currentStep = 1;
  isLoading = false;
  showPassword = false;
  showConfirmPassword = false;
  passwordStrength = 0;

  stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '1M+', label: 'Consultations' },
    { number: '500+', label: 'Doctors' },
    { number: '24/7', label: 'Support' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue],
      agreeHipaa: [false, Validators.requiredTrue],
      newsletter: [false]
    }, { validators: this.passwordMatchValidator });

    // Watch password changes for strength indicator
    this.signupForm.get('password')?.valueChanges.subscribe(password => {
      this.passwordStrength = this.calculatePasswordStrength(password);
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }

  calculatePasswordStrength(password: string): number {
    if (!password) return 0;
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    return Math.min(strength, 4);
  }

  getPasswordStrengthText(): string {
    const texts = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    return texts[this.passwordStrength];
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.signupForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.signupForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return `${this.getFieldLabel(fieldName)} is required`;
    }
    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `Must be at least ${minLength} characters`;
    }
    if (field?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (field?.hasError('pattern')) {
      return 'Please enter a valid phone number';
    }
    if (field?.hasError('passwordMismatch')) {
      return 'Passwords do not match';
    }
    return '';
  }

  getFieldLabel(fieldName: string): string {
    const labels: {[key: string]: string} = {
      firstName: 'First name',
      lastName: 'Last name',
      dateOfBirth: 'Date of birth',
      phone: 'Phone number',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Password confirmation'
    };
    return labels[fieldName] || fieldName;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  nextStep(): void {
    if (this.currentStep === 1) {
      const step1Fields = ['firstName', 'lastName', 'dateOfBirth', 'phone'];
      let isValid = true;
      
      step1Fields.forEach(field => {
        const control = this.signupForm.get(field);
        control?.markAsTouched();
        if (control?.invalid) isValid = false;
      });
      
      if (isValid) this.currentStep++;
    } else if (this.currentStep === 2) {
      const step2Fields = ['email', 'password', 'confirmPassword'];
      let isValid = true;
      
      step2Fields.forEach(field => {
        const control = this.signupForm.get(field);
        control?.markAsTouched();
        if (control?.invalid) isValid = false;
      });
      
      if (isValid) this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Signup data:', this.signupForm.value);
        this.isLoading = false;
        this.router.navigate(['/login'], { 
          queryParams: { registered: 'true' } 
        });
      }, 2000);
    } else {
      Object.keys(this.signupForm.controls).forEach(key => {
        this.signupForm.get(key)?.markAsTouched();
      });
    }
  }

  signUpWithGoogle(): void {
    console.log('Sign up with Google');
    // Implement Google OAuth
  }

  signUpWithFacebook(): void {
    console.log('Sign up with Facebook');
    // Implement Facebook OAuth
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}