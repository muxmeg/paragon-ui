import {Component, Input} from "@angular/core";
import {ImmediateTaskService} from "../immediate-task.service";
import {AuthService} from "../../shared/authentication.service";
import {RoleParameter} from "../../model/roleParameter";
import {ScheduledTaskService} from "../scheduled-task.service";

@Component({
  selector: "app-action-eject-air",
  templateUrl: "eject-air.component.html"
})

export class EjectAirComponent {

  constructor(private scheduledTaskService: ScheduledTaskService, authService: AuthService) {
  }
  onPress(): void {
    this.scheduledTaskService.ejectAir();
  }
}
