import {Component, OnInit} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {animate, style, transition, trigger} from "@angular/animations";
import {EventService} from "../event.service";

@Component({
  selector: "app-action-navigation-panel",
  templateUrl: "navigation-panel.component.html",
  styleUrls: [ "navigation-panel.component.css" ],
  animations: [
    trigger("ngIfAnimation", [
      transition("void => *", [
        style({ opacity: 0, background: "gray" }),
        animate("0.8s ease-in"), style({transform: "translateX(0)", opacity: 1})
      ]),
      transition("* => void", [
        style({ opacity: 1, background: "gray" }),
        animate("0.8s ease-in"), style({transform: "translateX(0)", opacity: 0})
      ])
    ])
  ]
})

export class NavigationPanelComponent implements OnInit {
  private readonly NAVIGATION_STRINGS_TOPIC_MAPPING: string = "/topic/navigationStrings";
  private readonly NAVIGATION_COMMANDS_MAPPING: string = "/ws/navigationCommands";
  private readonly NAVIGATION_STRINGS_REQUEST_MAPPING: string = "/ws/navigationStrings/request";

  navigationStrings: string[];
  navigationCharacters: string[] = ["a", "b", "c", "d", "A", "B", "C", "D", "X", "1", "2", "3", "!", "?", "@", "#", "$",
    "%", "^", "&", "*", "(", ")", "+", "=", "-", "'", "/", ".", ",", "[", "]", "{", "}", "~"];
  commandLength = 12;
  currentCommand = "";
  sendMessage = false;

  constructor(private stompService: StompService, private eventService: EventService) {
  }
  ngOnInit(): void {
    this.stompService.subscribe(this.NAVIGATION_STRINGS_TOPIC_MAPPING)
      .subscribe((result) => {
        this.navigationStrings = JSON.parse(result.body).map((value) => value.split(""));
      });
    const refreshData = () => {
      this.stompService.publish(this.NAVIGATION_STRINGS_REQUEST_MAPPING, "ololo");
    };
    this.eventService.refreshData$.subscribe(value => refreshData());
    refreshData();
  }
  clearCommand(): void {
    this.currentCommand = "";
  }
  enterCharacter(character: string): void {
    this.currentCommand += character;
    if (this.currentCommand.length === this.commandLength) {
      this.stompService.publish(this.NAVIGATION_COMMANDS_MAPPING, this.currentCommand);
      this.clearCommand();
      this.sendMessage = true;
      setTimeout(() => {
        this.sendMessage = false;
      }, 2000);
    }
  }
}
