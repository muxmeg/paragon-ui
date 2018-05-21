import {Injectable} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../shared/authentication.service";
import {ShipManualEvent} from "../model/shipEvent";

@Injectable()
export class ImmediateTaskService {
  private readonly SERVICE_URL = "/ws/immediateTask";

  constructor(private stompService: StompService, private authService: AuthService) {
  }

  disableRadio(turns: number): void {
    this.stompService.publish(this.SERVICE_URL,
      JSON.stringify({type: "disableRadio", parameters: {turns: turns},
        sender: this.authService.currentRole.name}));
  }

  changePassword(role: String, newPassword: String, isSecret: boolean): void {
    this.stompService.publish(this.SERVICE_URL,
      JSON.stringify({type: "changePassword", parameters: {role: role,
        newPassword: newPassword, isSecret: isSecret},
        sender: this.authService.currentRole.name}));
  }

  generatorActivation(): void {
    this.stompService.publish(this.SERVICE_URL,
      JSON.stringify({type: "generatorActivation", parameters: {},
        sender: this.authService.currentRole.name}));
  }

  switchAnchor(): void {
    this.stompService.publish(this.SERVICE_URL,
      JSON.stringify({type: "switchAnchor", parameters: {},
        sender: this.authService.currentRole.name}));
  }

  ejectCargo(cargoId: number): void {
    this.stompService.publish(this.SERVICE_URL,
      JSON.stringify({type: "ejectCargo", parameters: {cargoId: cargoId},
        sender: this.authService.currentRole.name}));
  }

  createManualEvent(shipEvent: ShipManualEvent): void {
    this.stompService.publish(this.SERVICE_URL,
      JSON.stringify({type: "manualEvent", parameters: shipEvent,
        sender: this.authService.currentRole.name}));
  }
}
