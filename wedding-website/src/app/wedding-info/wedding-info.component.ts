import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-info',
  standalone: true,
  imports: [],
  template: `
    <div class="wedding-container">
      <h1>Välkommen till vårt bröllop!</h1>
      <p>Vi gifter oss den 9 augusti 2025 på Högby Gård.</p>
      <p>Mer information kommer snart. Hoppas vi ses där!</p>
    </div>
  `,
  styles: `
    .wedding-container {
      text-align: center;
      margin-top: 50px;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: #ff6f61;
    }

    p {
      font-size: 18px;
    }
  `
})
export class WeddingInfoComponent {

}
