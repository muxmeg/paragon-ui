import {Component} from "@angular/core";
import {AuthService} from "../../../shared/authentication.service";

@Component({
  template:  `
    <app-action-ship-data></app-action-ship-data>
    <app-action-navigation-data></app-action-navigation-data>
    <app-ship-manual-events></app-ship-manual-events>
    <app-action-radar-data></app-action-radar-data>
  `
})
export class GmActionsComponent {
  constructor(authService: AuthService) {
  }
}
