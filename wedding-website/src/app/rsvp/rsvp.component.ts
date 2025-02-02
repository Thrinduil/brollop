import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {CardUi} from "../ui/card.ui";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    CardUi,
    MatButton
  ],
  template: `
    <app-card>
      <mat-card>
        <mat-card-header>
          <mat-card-title>OSA</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Vad väntar du på? OSA redan idag! (Vi vill ha ditt svar senast 9 maj!)</p>
          <a href="https://forms.office.com/r/S8GBENe3Qn" target="_blank" style="text-decoration: none;">
            <button mat-raised-button>OSA här!</button>
          </a>
        </mat-card-content>
      </mat-card>
    </app-card>
  `,
  styles: ``
})
export class RsvpComponent {

}
