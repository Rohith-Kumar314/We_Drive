import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AuthStore } from '../core/auth/store/auth.store';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatAnchor, MatButton, MatIcon],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  protected readonly authStore = inject(AuthStore);

  // Links shown to signed-in users. Add your authenticated routes here,
  // e.g. { label: 'Bookings', path: '/bookings' }
  protected readonly navLinks: NavLink[] = [];

  protected signOut(): void {
    // TODO: your logout logic goes here (service call, clear tokens, reset store, navigate).
  }
}