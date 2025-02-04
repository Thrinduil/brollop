import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexPage} from "./page/index.page";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IndexPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding-website';
}
