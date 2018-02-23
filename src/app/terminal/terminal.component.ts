import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Role} from "../model/role";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: "app-terminal",
  templateUrl: "terminal.component.html",
  styleUrls: [ "terminal.component.css" ]
})

export class TerminalComponent {
  role: Role;
  notifications: Object;
  actionComponents: Object;

  constructor(authService: AuthService, router: Router) {
    this.role = authService.currentRole;
    if (!this.role) {
      router.navigate(["/login"]);
    }
    this.notifications = {publicChat: 1, actions: 0, privateChat: 0, gmChat: 0};
  }

  onPublicTabClick() {
    this.notifications["publicChat"] = 0;
  }

}
