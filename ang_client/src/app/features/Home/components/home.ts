import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

interface Role {
  icon: string;
  title: string;
  text: string;
}

interface Step {
  title: string;
  text: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatAnchor, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly roles: Role[] = [
    {
      icon: 'person',
      title: 'Riders',
      text: 'Book a vehicle with a driver in minutes and follow the trip from pickup to drop-off.',
    },
    {
      icon: 'badge',
      title: 'Drivers',
      text: 'Accept trips that fit your schedule and see what you earn after every ride.',
    },
    {
      icon: 'directions_car',
      title: 'Car owners',
      text: "List your vehicle, choose when it's available, and let We_Drive match it with riders.",
    },
  ];

  protected readonly steps: Step[] = [
    { title: 'Set your trip', text: "Enter where you're starting and where you're going." },
    {
      title: 'Pick a vehicle and driver',
      text: 'Compare options by price, rating, and arrival time.',
    },
    { title: 'Ride and track', text: 'Follow your trip live and pay in the app.' },
  ];

  protected readonly currentYear = new Date().getFullYear();
}
