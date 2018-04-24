import {Component} from "@angular/core";
import {ImmediateTaskService} from "../immediate-task.service";

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
