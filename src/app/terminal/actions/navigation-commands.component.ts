import {Component, OnInit} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {EncryptedCommand} from "../../model/encryptedCommand";
import {EventService} from "../event.service";

@Component({
  selector: "app-action-navigation-commands",
  templateUrl: "navigation-commands.component.html"
})

export class NavigationCommandsComponent implements OnInit {
  private readonly NAVIGATION_COMMANDS_TOPIC_MAPPING: string = "/topic/navigationCommands";
  private readonly NAVIGATION_COMMANDS_REQUEST_MAPPING: string = "/ws/navigationCommands/request";
  navigationCommands: EncryptedCommand[];
  displayedColumns = ["task", "command"];
  commandLength = 12;

  constructor(private stompService: StompService, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.stompService.subscribe(this.NAVIGATION_COMMANDS_TOPIC_MAPPING)
      .subscribe((result) => {
        this.navigationCommands = JSON.parse(result.body).commands;
        console.log(this.navigationCommands);
      });
    const refreshData = () => {
      this.stompService.publish(this.NAVIGATION_COMMANDS_REQUEST_MAPPING, "ololo");
    };
    this.eventService.refreshData$.subscribe(value => refreshData());
    refreshData();
  }
  displayTask(task: any): string {
    let result: string;
    switch (task.scheduledTaskType) {
      case "SPEED":
        result = "Change speed " + task.amount;
        break;
      case "DIRECTION":
        result = "Turn " + (task.right ? "right" : "left");
        break;
    }
    return result;
  }

  displayEncryptedCommand(command: {[key: number]: string}): string {
    let result = "";
    for (let i = 0; i < this.commandLength; i++) {
      if (command[i]) {
        result += command[i];
      } else {
        result += "_";
      }
      result += " ";
    }
    return result;
  }
}
