import {Component} from "@angular/core";
import {ImmediateTaskService} from "../immediate-task.service";

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
