import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhatComponent} from "./whats-up/what.component";
import {WhereComponent} from "./where/where.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SleepComponent} from "./sleep/sleep.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WhatComponent, WhereComponent, WelcomeComponent, SleepComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding-website';
}
