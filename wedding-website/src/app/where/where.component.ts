import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {CardUi} from "../ui/card.ui";

@Component({
  selector: 'app-where',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    CardUi
  ],
  template: `
    <app-card id="where-card">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Var?</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            <a href="https://spa.hogbygard.se/">Högby gård!</a>
          </p>
          <p>
            Matilda har alltid älskat spa och Fredrik har fantastiskt nog också börjat förstå tjusningen med spamiljön
            även om badkruke-tendens finns! Då vi besökt ett antal span under våra år tillsammans känns det helt rätt
            att även fira vårt bröllop på ett. Och just Högby gård var vi på ett par månader innan Ronja kom.
          </p>
          <p>
            Högby gård är flera hundra år gammalt och ligger mysigt till utanför Borensberg.
          </p>
          <p>
            Om du liksom bruden saknar lokalsinne eller bara tycker att det är rimligt med GPS finns
            <a href="https://spa.hogbygard.se/kontakta-oss/">exakt position här</a>.
          </p>
          <p>
            Det finns gott om parkeringsplatser och man kan även åka buss till Högbylyckan,
            ca 500 meter från Högby gård.
          </p>
        </mat-card-content>
      </mat-card>
    </app-card>
  `,
  styles: ``
})
export class WhereComponent {

}
