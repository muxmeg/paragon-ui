import {Component} from "@angular/core";
import {ScheduledTaskService} from "../scheduled-task.service";

@Component({
  selector: "app-action-engine-panel",
  templateUrl: "engine-panel.component.html"
})

export class EnginePanelComponent {

  constructor(private scheduledTaskService: ScheduledTaskService) {
  }
  enableBoost(): void {
    this.scheduledTaskService.enableBoost();
  }
  enableCoolers(): void {
    this.scheduledTaskService.enableCoolers();
  }
}
