import {Component} from '@angular/core';
import {CardUi} from "../ui/card.ui";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CardUi,
    MatCard,
    MatCardContent
  ],
  template: `
    <app-card id="welcome-card">
      <mat-card>
        <mat-card-content>
          <h2>Välkommen på</h2>
          <h1 class="highlight">Matilda och Fredriks</h1>
          <h2>bröllop!</h2>
          <p>9 augusti (och 10 augusti, för den som vill!)</p>
        </mat-card-content>
      </mat-card>
    </app-card>
  `,
  styles: ``
})
export class WelcomeComponent {

}
