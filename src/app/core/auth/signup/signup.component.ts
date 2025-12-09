// signup.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';

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
    // { number: '1M+', label: 'Consultations' },
    { number: '500+', label: 'Doctors' },
    { number: '24/7', label: 'Support' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue],
      agreeHipaa: [false, Validators.requiredTrue],
      newsletter: [false]
    }, { validators: this.passwordMatchValidator });

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
    const labels: { [key: string]: string } = {
      firstName: 'First name',
      lastName: 'Last name',
      dateOfBirth: 'Date of birth',
      phone: 'Phone number',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Password confirmation',
      location: "Location",
      gender: "Gender"
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
      const step1Fields = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'phone'];
      let isValid = true;

      step1Fields.forEach(field => {
        const control = this.signupForm.get(field);
        control?.markAsTouched();
        if (control?.invalid) isValid = false;
      });

      if (isValid) this.currentStep++;
    } else if (this.currentStep === 2) {
      const step2Fields = ['email', 'password', 'confirmPassword', 'location'];
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

  // 🎯 FINAL WORKING API CALL
  onSubmit(): void {
    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).forEach(key => {
        this.signupForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isLoading = true;

    const f = this.signupForm.value;

  const payload = {
  user_id: 0,
  first_name: f.firstName,
  last_name: f.lastName,
  date_of_birth: new Date(f.dateOfBirth).toISOString(),
  gender: f.gender,
  primary_phone: f.phone,
  secondary_phone: "N/A",
  email: f.email,
  password_hash: f.password,
  location: f.location,
  role: "patient",
  is_verified: "N",
  is_active: "Y",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};


    console.log("📤 Sending Payload:", payload);

    this.userService.createUser(payload).subscribe({
      next: (res) => {
        console.log("🎉 User created successfully:", res);
        this.isLoading = false;

        this.router.navigate(['/auth'], {
          queryParams: { registered: 'true' }
        });
      },
      error: (error) => {
  this.isLoading = false;
  console.error("API ERROR:", error);

  alert("Signup failed!\n\n" + JSON.stringify(error.error || error.message || error));
}

      
    });
  }

  signUpWithGoogle(): void {
    console.log('Sign up with Google');
  }

  signUpWithFacebook(): void {
    console.log('Sign up with Facebook');
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
