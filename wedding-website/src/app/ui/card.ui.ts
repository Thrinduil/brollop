import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-content></ng-content>
  `,
  styles: `
    mat-card {
      max-width: 600px;
      margin: 2rem auto;
      padding: 1rem;
      background-color: #fefefe; /* Ljus bakgrund för kontrast */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      mat-card-title {
        font-family: 'Cinzel', serif;
        font-size: 1.5rem;
        text-align: center;
        //color: #d6a57c; /* Elegant guldliknande färg */
      }

      ul {
        padding: 0;
        list-style: none;

        li {
          margin: 0.5rem 0;
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;

          strong {
            //color: #d6a57c; /* Samma färg som titeln */
          }
        }
      }
    }
  `
})
export class CardUi {
}
