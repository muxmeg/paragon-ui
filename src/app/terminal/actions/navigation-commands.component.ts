import {Component} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {keyframes} from "@angular/core/src/animation/dsl";

@Component({
  selector: "app-action-navigation-commands",
  templateUrl: "navigation-commands.component.html"
})

export class NavigationCommandsComponent {
  private readonly NAVIGATION_STRINGS_TOPIC_MAPPING: string = "/topic/navigationCommands";
  private readonly NAVIGATION_COMMANDS_MAPPING: string = "/ws/navigationCommands";

  navigationCommands: any;
  // [commands: string]: string[];

  constructor(private stompService: StompService) {
    stompService.subscribe(this.NAVIGATION_STRINGS_TOPIC_MAPPING)
      .subscribe((result) => {
        this.navigationCommands = JSON.parse(result.body);
      });
  }
}
