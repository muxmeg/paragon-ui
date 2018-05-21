import {Component, OnInit} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {EventService} from "../event.service";

@Component({
  selector: "app-action-navigation-data",
  templateUrl: "navigation-data.component.html"
})

export class NavigationDataComponent implements OnInit {
  private readonly NAVIGATION_DATA_TOPIC_MAPPING: string = "/topic/navigationData";
  private readonly NAVIGATION_DATA_REQUEST_MAPPING: string = "/ws/navigationData/request";

  data: number;

  constructor(private stompService: StompService, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.stompService.subscribe(this.NAVIGATION_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        this.data = JSON.parse(result.body);
      });
    const refreshData = () => {
      this.stompService.publish(this.NAVIGATION_DATA_REQUEST_MAPPING, "ololo");
    };
    this.eventService.refreshData$.subscribe(value => refreshData());
    refreshData();
  }
}
