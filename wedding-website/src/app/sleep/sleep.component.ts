import { Component } from '@angular/core';
import {CardUi} from "../ui/card.ui";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-sleep',
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
          <mat-card-title>Övernattning?</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            Om du vill övernatta på Högby gård (och det vill du!),
            välj alternativet med övernattning när du OSA:r.
          </p>
          <p>
            För 1350 kr/pers ingår övernattning*, frukostbuffé, spa, lunch och trevligt häng med oss.
          </p>
          <p>
            * Beroende på hur många som vill övernatta och spendera en riktigt mysig söndag med oss
            förbehåller vi oss rätten att ordna mer eller mindre kreativa sovlösningar.
          </p>
        </mat-card-content>
      </mat-card>
    </app-card>
  `,
  styles: ``
})
export class SleepComponent {

}
