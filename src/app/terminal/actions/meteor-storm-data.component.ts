import {Component, Input} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";
import {RolesService} from "../roles.service";
import {Role} from "../../model/role";
import {NavigationData} from "../../model/navigationData";

@Component({
  selector: "app-action-meteor-storm-data",
  templateUrl: "meteor-storm-data.component.html"
})

export class MeteorStormDataComponent {
  private readonly METEOR_STORM_DATA_TOPIC_MAPPING: string = "/topic/meteorStormData";
  private readonly METEOR_STORM_DATA_REQUEST_MAPPING: string = "/ws/meteorStormData/request";

  data: NavigationData;

  constructor(private stompService: StompService) {
    stompService.subscribe(this.METEOR_STORM_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        this.data = JSON.parse(result.body);
      });
    setTimeout(() => {
      this.stompService.publish(this.METEOR_STORM_DATA_REQUEST_MAPPING, "ololo"); // TODO remove messages
    }, 1000);
  }
}
