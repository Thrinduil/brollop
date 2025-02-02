import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {CardUi} from "../ui/card.ui";

@Component({
  selector: 'app-what',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    CardUi
  ],
  template: `
    <app-card>
      <mat-card>
        <mat-card-header>
          <mat-card-title>Vad händer?</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h1>Lördag</h1>
          <p>Bröllopsdagen inleds med bla bla nånting nånting.</p>
          <ul>
            <li>
              <strong>12:00:</strong> Enkel lunch i trädgården
            </li>
            <li>
              <strong>14:00:</strong> Vigselceremoni
            </li>
            <li>
              <strong>17:00:</strong> Middag och festligheter
            </li>
            <li>
              <strong>21:30:</strong> Aktiviteter i yogasalen
            </li>
            <li>
              <strong>22:30:</strong> Bröllopstårta i yogasalen
            </li>
            <li>
              <strong>01:00:</strong> Baren stänger i yogasalen
            </li>
          </ul>
          <h1>Söndag</h1>
          <p>Spa och grejer. Kul!</p>
          <ul>
            <li>
              <strong>08:30-10:00:</strong> Frukost serveras
            </li>
            <li>
              <strong>09:30-13:00:</strong> Spa och häng
            </li>
            <li>
              <strong>13:00:</strong> Utcheckning
            </li>
            <li>
              <strong>13:00-14:30:</strong> Lunch
            </li>
            <li>
              <strong>14:30:</strong> Tack för oss!
            </li>
          </ul>
        </mat-card-content>
      </mat-card>
    </app-card>
  `,
  styles: `
  `
})
export class WhatComponent {
}
