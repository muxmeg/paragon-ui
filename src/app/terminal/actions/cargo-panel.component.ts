import {Component} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {ShipData} from "../../model/shipData";
import {ImmediateTaskService} from "../immediate-task.service";
import {AuthService} from "../../shared/authentication.service";

@Component({
  selector: "app-action-cargo",
  templateUrl: "cargo-panel.component.html"
})

export class CargoPanelComponent {
  cargo: number[];

  constructor(private immediateTaskService: ImmediateTaskService) {
    this.cargo = Array(5).fill(null);
  }

  onPress(cargoId): void {
    this.immediateTaskService.ejectCargo(cargoId);
  }
}
