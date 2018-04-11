import {Component, Input} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";
import {RolesService} from "../roles.service";
import {Role} from "../../model/role";
import {NavigationData} from "../../model/navigationData";
import {WindData} from "../../model/windData";

@Component({
  selector: "app-action-radar-data",
  templateUrl: "radar-data.component.html"
})

export class RadarComponent {
  private readonly RADAR_DATA_TOPIC_MAPPING: string = "/topic/radar";
  private readonly RADAR_DATA_REQUEST_MAPPING: string = "/ws/radar/request";

  data: WindData;

  constructor(private stompService: StompService) {
    stompService.subscribe(this.RADAR_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        this.data = JSON.parse(result.body);
      });
    setTimeout(() => {
      this.stompService.publish(this.RADAR_DATA_REQUEST_MAPPING, "ololo"); // TODO remove messages
    }, 1000);
  }
}
