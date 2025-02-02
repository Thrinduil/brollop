import { Component } from '@angular/core';
import {CardUi} from "../ui/card.ui";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-misc',
  standalone: true,
  imports: [
    CardUi,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle
  ],
  template: `
    <app-card>
      <mat-card>
        <mat-card-header>
          <mat-card-title>Övrigt</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h1>Klädkod</h1>
          <p>
            TODO
          </p>
          <h1>Toastmasters</h1>
          <p>
            TODO
          </p>
          <h1>Tal och sånt</h1>
          <p>
            TODO
          </p>
          <h1>Barn</h1>
          <p>
            TODO
          </p>
          <h1>Presenter</h1>
          <p>
            TODO
          </p>
        </mat-card-content>
      </mat-card>
    </app-card>
  `,
  styles: ``
})
export class MiscComponent {

}
