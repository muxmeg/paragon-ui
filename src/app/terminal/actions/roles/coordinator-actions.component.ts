import {Component} from "@angular/core";
import {AuthService} from "../../../shared/authentication.service";

@Component({
  template:  `
    <div *ngIf="secret">
      <app-action-disable-radio [turns]="2" [usageLimit]="1"></app-action-disable-radio>
    </div>
  `
})
export class CoordinatorActionsComponent {
  secret: boolean;
  constructor(authService: AuthService) {
    this.secret = authService.currentRole.secret;
  }
}
