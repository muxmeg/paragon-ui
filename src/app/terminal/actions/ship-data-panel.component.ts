import {Component, OnInit} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {ShipData} from "../../model/shipData";
import {EventService} from "../event.service";

@Component({
  selector: "app-action-ship-data",
  templateUrl: "ship-data-panel.component.html"
})

export class ShipDataPanelComponent implements OnInit {
  private readonly SHIP_DATA_TOPIC_MAPPING: string = "/topic/shipData";
  private readonly SHIP_DATA_REQUEST_MAPPING: string = "/ws/shipData/request";
  private readonly MESSAGE_LIMIT = 3;
  data: ShipData[] = [];
  constructor(private stompService: StompService, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.stompService.subscribe(this.SHIP_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        const newData: ShipData = JSON.parse(result.body);
        if (this.data.length >= this.MESSAGE_LIMIT) {
          this.data.splice(0, 1);
        }
        this.data.push(newData);
      });
    const refreshData = () => {
      this.stompService.publish(this.SHIP_DATA_REQUEST_MAPPING, "ololo");
    };
    this.eventService.refreshData$.subscribe(value => refreshData());
    refreshData();
  }
}
