import {Component} from "@angular/core";
import {AuthService} from "../../../shared/authentication.service";

@Component({
  template:  `
    <app-action-navigation-data></app-action-navigation-data>
    <app-action-anchor></app-action-anchor>
    <app-action-navigation-panel></app-action-navigation-panel>
    <div *ngIf="secret">
      <app-action-eject-air></app-action-eject-air>
    </div>
  `
})
export class FirstPilotActionsComponent {
  secret: boolean;
  constructor(authService: AuthService) {
    this.secret = authService.currentRole.secret;
  }
}
