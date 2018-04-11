import {Component} from "@angular/core";
import {ShipManualEvent} from "../../model/shipEvent";
import {ImmediateTaskService} from "../immediate-task.service";

@Component({
  selector: "app-ship-manual-events",
  templateUrl: "ship-manual-events.component.html"
})

export class ShipManualEventsComponent {
  shipEvent: ShipManualEvent;
  constructor(private immediateTaskService: ImmediateTaskService) {
    this.clearEvent();
  }
  clearEvent() {
    this.shipEvent = {};
  }

  sendEvent() {
    this.immediateTaskService.createManualEvent(this.shipEvent);
    this.clearEvent();
  }
}
