import {Component} from "@angular/core";
import {AuthService} from "../../../shared/authentication.service";

@Component({
  template:  `
    <app-action-ship-data></app-action-ship-data>
    <app-action-engine-panel></app-action-engine-panel>
    <app-action-cargo></app-action-cargo>
    <app-action-anchor></app-action-anchor>
    <div *ngIf="secret">
    </div>
  `
})
export class EngineerActionsComponent {
  secret: boolean;
  constructor(authService: AuthService) {
    this.secret = authService.currentRole.secret;
  }
}
