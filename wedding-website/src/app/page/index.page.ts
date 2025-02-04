import {Component} from '@angular/core';
import {MiscComponent} from "../misc/misc.component";
import {RsvpComponent} from "../rsvp/rsvp.component";
import {SleepComponent} from "../sleep/sleep.component";
import {TopMenuComponent} from "../top-menu/top-menu.component";
import {WelcomeComponent} from "../welcome/welcome.component";
import {WhatComponent} from "../whats-up/what.component";
import {WhereComponent} from "../where/where.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MiscComponent,
    RsvpComponent,
    SleepComponent,
    TopMenuComponent,
    WelcomeComponent,
    WhatComponent,
    WhereComponent
  ],
  template: `
    <div>
      <app-top-menu></app-top-menu>
      <app-welcome></app-welcome>
      <app-where></app-where>
      <app-what></app-what>
      <app-sleep></app-sleep>
      <app-misc></app-misc>
      <app-rsvp></app-rsvp>
    </div>
  `,
  styles: `
    div {
      max-width: 600px;
      margin: auto;
    }
  `
})
export class IndexPage {
}
