import {Injectable} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../shared/authentication.service";

@Injectable()
export class ScheduledTaskService {
  private readonly SERVICE_URL = "/ws/scheduledTask";

  constructor(private stompService: StompService, private authService: AuthService) {
  }

  enableBoost(): void {
    this.stompService.publish(this.SERVICE_URL,
      JSON.stringify({type: "enableBoost", parameters: {},
        sender: this.authService.currentRole.name}));
  }

  enableCoolers(): void {
    this.stompService.publish(this.SERVICE_URL,
      JSON.stringify({type: "enableCoolers", parameters: {},
        sender: this.authService.currentRole.name}));
  }
}
