import {Component, OnInit} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {NavigationData} from "../../model/navigationData";
import {EventService} from "../event.service";

@Component({
  selector: "app-action-meteor-storm-data",
  templateUrl: "meteor-storm-data.component.html"
})

export class MeteorStormDataComponent implements OnInit {
  private readonly METEOR_STORM_DATA_TOPIC_MAPPING: string = "/topic/meteorStormData";
  private readonly METEOR_STORM_DATA_REQUEST_MAPPING: string = "/ws/meteorStormData/request";

  data: NavigationData;

  constructor(private stompService: StompService, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.stompService.subscribe(this.METEOR_STORM_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        this.data = JSON.parse(result.body);
      });
    const refreshData = () => {
      this.stompService.publish(this.METEOR_STORM_DATA_REQUEST_MAPPING, "ololo");
    };
    this.eventService.refreshData$.subscribe(value => refreshData());
    refreshData();
  }
}
