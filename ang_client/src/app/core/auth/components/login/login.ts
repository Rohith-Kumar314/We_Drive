import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { loginSchema } from '../../schemas/auth.schemas';
import { AuthService } from '../../services/auth.service';
import { AuthStore } from '../../store/auth.store';
import { Router } from '@angular/router';

import { MatFormField, MatLabel, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatPrefix, MatInput, MatButton, MatIcon],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  router = inject(Router);
  authService = inject(AuthService);
  authStore = inject(AuthStore);

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleLoginClick() {
    const data = this.loginForm.getRawValue();
    const payLoad = loginSchema.safeParse(data);

    if (!payLoad.success) {
      console.error('an error occurred', payLoad.error);
    } else {
      this.authService.RequestLogin(payLoad.data).subscribe({
        next: () => {
          console.log('Login Successfull');
          this.authStore.isLoggedIn.set(true);
        },
        error: (err) => {
          console.error('ERRROR occurred', err);
        },
      });
    }
  }
}
