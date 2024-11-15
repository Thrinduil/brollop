import {Component} from '@angular/core';

@Component({
  selector: 'app-wedding-info',
  standalone: true,
  imports: [],
  template: `
    <div class="wedding-container">
      <div class="welcome-message">
        <p>Välkommen på</p>
        <h1 class="highlight">Matilda och Fredriks</h1>
        <p>bröllop!</p>
      </div>
      <div class="details">
        <p>9 augusti 2025</p>
        <p>Högby gård</p>
      </div>
    </div>
  `,
  styles: `
    .wedding-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #d4e4ff, #a2b8e8); /* Lugn blå gradient */
      font-family: 'Roboto', sans-serif;
      text-align: center;
      color: #2e3b55;
      padding: 20px;
      box-sizing: border-box;
    }

    .welcome-message {
      background: rgba(255, 255, 255, 0.9); /* Vit, lätt transparent bakgrund */
      padding: 20px 40px;
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .welcome-message p {
      margin: 0;
      font-size: 1.2rem;
    }

    .welcome-message h1 {
      margin: 20px 0;
      font-size: 3rem;
      font-family: 'Great Vibes', cursive; /* Elegant font */
      color: #6a5acd; /* Mörk lavendel accentfärg */
    }

    .details {
      margin-top: 30px; /* Flyttar datumet längre ner */
      font-size: 1.2rem;
      font-weight: bold;
      color: #4a5568; /* Mörkgrå färg */
    }

    .details p {
      margin: 5px 0;
    }

    @media (max-width: 768px) {
      .welcome-message {
        padding: 10px 20px;
      }

      .welcome-message h1 {
        font-size: 2.5rem;
      }

      .welcome-message p {
        font-size: 1rem;
      }
    }
  `
})
export class WeddingInfoComponent {
}
