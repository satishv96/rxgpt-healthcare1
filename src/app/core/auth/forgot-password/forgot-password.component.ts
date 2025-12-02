// forgot-password.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  resetForm: FormGroup;
  isLoading = false;
  emailSent = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.resetForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.resetForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'Email is required';
    }
    if (field?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }

  onSubmit(): void {
    if (this.resetForm.valid) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Password reset email sent to:', this.resetForm.get('email')?.value);
        this.isLoading = false;
        this.emailSent = true;
      }, 2000);
    } else {
      this.resetForm.get('email')?.markAsTouched();
    }
  }

  resendEmail(): void {
    console.log('Resending email to:', this.resetForm.get('email')?.value);
    // Implement resend logic
  }

  goBack(): void {
    this.router.navigate(['/auth']);
  }
}
