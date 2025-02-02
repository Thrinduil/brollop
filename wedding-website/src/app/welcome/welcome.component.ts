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
    <app-card>
      <mat-card>
        <mat-card-content>
          <h2>Välkommen på</h2>
          <h1 class="highlight">Matilda och Fredriks</h1>
          <h2>bröllop!</h2>
        </mat-card-content>
      </mat-card>
    </app-card>
  `,
  styles: ``
})
export class WelcomeComponent {

}
