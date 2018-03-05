import {Component} from "@angular/core";
import {AuthService} from "../../../shared/authentication.service";

@Component({
  template:  `
  `
})
export class SkkActionsComponent {
  secret: boolean;
  constructor(authService: AuthService) {
    this.secret = authService.currentRole.secret;
  }
}
