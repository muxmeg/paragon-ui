import {Component, Input} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";
import {RolesService} from "../roles.service";
import {Role} from "../../model/role";
import {NavigationData} from "../../model/navigationData";

@Component({
  selector: "app-action-navigation-data",
  templateUrl: "navigation-data.component.html"
})

export class NavigationDataComponent {
  private readonly NAVIGATION_DATA_TOPIC_MAPPING: string = "/topic/navigationData";

  data: NavigationData;

  constructor(stompService: StompService) {
    stompService.subscribe(this.NAVIGATION_DATA_TOPIC_MAPPING)
      .subscribe((result) => {
        this.data = JSON.parse(result.body);
      });
  }
}
