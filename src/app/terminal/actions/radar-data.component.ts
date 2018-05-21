import {Component, Input, OnInit} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";
import {RolesService} from "../roles.service";
import {Role} from "../../model/role";
import {NavigationData} from "../../model/navigationData";
import {WindData} from "../../model/windData";
import {RadarData} from "../../model/radarData";
import {EventService} from "../event.service";

@Component({
  selector: "app-action-radar-data",
  templateUrl: "radar-data.component.html"
})

export class RadarComponent implements OnInit {
  private readonly RADAR_DATA_TOPIC_MAPPING: string = "/topic/radarData";
  private readonly RADAR_DATA_REQUEST_MAPPING: string = "/ws/radarData/request";

  data: RadarData = {};

  constructor(private stompService: StompService, private eventService: EventService) {
  }
  ngOnInit(): void {
    this.stompService.subscribe(this.RADAR_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        this.data = JSON.parse(result.body);
      });
    const refreshData = () => {
      this.stompService.publish(this.RADAR_DATA_REQUEST_MAPPING, "ololo");
    };
    this.eventService.refreshData$.subscribe(value => refreshData());
    refreshData();
  }
}
