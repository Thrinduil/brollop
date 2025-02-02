import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeddingInfoComponent} from "./wedding-info/wedding-info.component";
import {WhatComponent} from "./whats-up/what.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WeddingInfoComponent, WhatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding-website';
}
