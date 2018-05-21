import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Role} from "../model/role";
import {AuthService} from "../shared/authentication.service";
import {MatTabChangeEvent} from "@angular/material";
import {StompService} from "@stomp/ng2-stompjs";
import {EventService} from "./event.service";

@Component({
  selector: "app-terminal",
  templateUrl: "terminal.component.html",
  styleUrls: [ "terminal.component.css" ]
})

export class TerminalComponent implements OnInit {
  private readonly ROLE_TOPIC_MAPPING: string = "/topic/role";
  private readonly ROLE_LOGOUT_TOPIC_MAPPING: string = this.ROLE_TOPIC_MAPPING + "/logout/";
  role: Role;
  notifications: Object;
  currentTab: string;

  constructor(private authService: AuthService, private router: Router, private stompService: StompService,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.role = this.authService.currentRole;
    if (!this.role) {
      this.router.navigate(["/login"]);
    }
    this.notifications = {publicChat: 0, privateChat: 0, gmChat: 0, secretChat: 0};
    this.stompService.subscribe(this.ROLE_LOGOUT_TOPIC_MAPPING + this.role.name)
      .subscribe(() => {
        this.logout();
      });
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

  refreshActions() {
    this.eventService.refreshData$.next("");
  }
}
