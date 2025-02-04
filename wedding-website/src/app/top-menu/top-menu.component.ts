import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    MatToolbar
  ],
  template: `
    <mat-toolbar>
      <a href="#welcome-card"><span>När</span></a>
      <span class="example-spacer"></span>
      <a href="#where-card"><span>Var</span></a>
      <span class="example-spacer"></span>
      <a href="#what-card"><span>Vad</span></a>
      <span class="example-spacer"></span>
      <a href="#sleep-card"><span>Övernattning</span></a>
      <span class="example-spacer"></span>
      <a href="#misc-card"><span>Övrigt</span></a>
      <span class="example-spacer"></span>
      <a href="#rsvp-card"><span>OSA</span></a>
    </mat-toolbar>
  `,
  styles: `
    .example-spacer {
      flex: 1 1 auto;
    }
  `
})
export class TopMenuComponent {
}
