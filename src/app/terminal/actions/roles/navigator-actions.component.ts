import {Component} from "@angular/core";

@Component({
  template:  `
    <app-action-navigation-data></app-action-navigation-data>
    <app-action-wind-data></app-action-wind-data>
    <app-action-navigation-commands></app-action-navigation-commands>
    <app-action-radar-data></app-action-radar-data>
  `
})
export class NavigatorActionsComponent {
  constructor() {
  }
}
