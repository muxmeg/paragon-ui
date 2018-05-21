import {Component, OnInit} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {WindData} from "../../model/windData";
import {EventService} from "../event.service";

@Component({
  selector: "app-action-wind-data",
  templateUrl: "wind-data.component.html"
})

export class WindDataComponent implements OnInit {
  private readonly WIND_DATA_TOPIC_MAPPING: string = "/topic/windData";
  private readonly WIND_DATA_REQUEST_MAPPING: string = "/ws/windData/request";

  data: WindData;

  constructor(private stompService: StompService, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.stompService.subscribe(this.WIND_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        this.data = JSON.parse(result.body);
      });
    const refreshData = () => {
      this.stompService.publish(this.WIND_DATA_REQUEST_MAPPING, "ololo");
    };
    this.eventService.refreshData$.subscribe(value => refreshData());
    refreshData();
  }
}
