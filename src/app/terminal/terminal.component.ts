import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Role} from "../model/role";
import {AuthService} from "../shared/authentication.service";
import {MatTabChangeEvent} from "@angular/material";

@Component({
  selector: "app-terminal",
  templateUrl: "terminal.component.html",
  styleUrls: [ "terminal.component.css" ]
})

export class TerminalComponent {
  role: Role;
  notifications: Object;
  currentTab: string;

  constructor(private authService: AuthService, private router: Router) {
    this.role = authService.currentRole;
    if (!this.role) {
      router.navigate(["/login"]);
    }
    this.notifications = {publicChat: 0, privateChat: 0, gmChat: 0, secretChat: 0};
  }

  onMessageReceive(tabName) {
    if (this.currentTab !== tabName) {
      this.notifications[tabName]++;
    }
  }

  logout() {
    this.authService.currentRole = null;
    this.router.navigate(["/login"]);
  }

  onTabChange($event: MatTabChangeEvent) {
    this.currentTab = $event.tab.textLabel;
    this.notifications[this.currentTab] = 0;
  }
}
