import {Component, Input} from "@angular/core";
import {ImmediateTaskService} from "../immediate-task.service";
import {AuthService} from "../../shared/authentication.service";
import {RoleParameter} from "../../model/roleParameter";

@Component({
  selector: "app-action-anchor",
  templateUrl: "anchor.component.html"
})

export class AnchorComponent {

  constructor(private immediateTaskService: ImmediateTaskService) {
  }
  onPress(): void {
    this.immediateTaskService.switchAnchor();
  }
}
