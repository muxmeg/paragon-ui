import {Component} from "@angular/core";
import {AuthService} from "../../../shared/authentication.service";

@Component({
  template:  `
    <app-action-navigation-data></app-action-navigation-data>
    <app-action-navigation-panel></app-action-navigation-panel>
    <div *ngIf="secret">
      <app-action-generator-activation [usageLimit]="1"></app-action-generator-activation>
    </div>
  `
})
export class SecondPilotActionsComponent {
  secret: boolean;
  constructor(authService: AuthService) {
    this.secret = authService.currentRole.secret;
  }
}
