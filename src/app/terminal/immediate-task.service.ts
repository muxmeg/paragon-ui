import {Injectable} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../shared/authentication.service";

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
}
