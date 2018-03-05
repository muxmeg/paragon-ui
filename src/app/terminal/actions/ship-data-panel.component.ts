import {Component} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {ShipData} from "../../model/shipData";

@Component({
  selector: "app-action-ship-data",
  templateUrl: "ship-data-panel.component.html"
})

export class ShipDataPanelComponent {
  private readonly SHIP_DATA_TOPIC_MAPPING: string = "/topic/shipData";
  private readonly SHIP_DATA_REQUEST_MAPPING: string = "/ws/shipData/request";
  private readonly MESSAGE_LIMIT = 3;
  data: ShipData[] = [];
  constructor(private stompService: StompService) {
    stompService.subscribe(this.SHIP_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        const newData: ShipData = JSON.parse(result.body);
        if (this.data.length >= this.MESSAGE_LIMIT) {
          this.data.splice(0, 1);
        }
        this.data.push(newData);
      });
    setTimeout(() => {
      this.stompService.publish(this.SHIP_DATA_REQUEST_MAPPING, "ololo"); // TODO remove messages
    }, 1000);
  }
}
