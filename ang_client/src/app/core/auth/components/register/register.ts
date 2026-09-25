import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { registerSchema } from '../../schemas/auth.schemas';

function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  };
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {
  authService = inject(AuthService);
  userRegisterForm = new FormGroup(
    {
      username: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),

      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),

      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(4)],
      }),

      confirmPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      age: new FormControl<number | null>(null),
      role: new FormControl('USER', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    },
    { validators: passwordMatchValidator() },
  );

  onRegisterClick() {
    const registerValues = this.userRegisterForm.value;
    const formValues = registerSchema.safeParse(registerValues);

    if (formValues.success) {
      this.authService.registerUser(formValues.data).subscribe({
        next: () => {},
        error: (err) => {
          console.error('ERROR IN REGISTRATION', err);
        },
      });
    }else{
      console.log(formValues.error);
    }
  }
}
