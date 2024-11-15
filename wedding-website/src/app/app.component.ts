import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeddingInfoComponent} from "./wedding-info/wedding-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WeddingInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding-website';
}
