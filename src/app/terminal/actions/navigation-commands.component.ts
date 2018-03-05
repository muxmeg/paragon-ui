import {Component} from "@angular/core";
import {StompService} from "@stomp/ng2-stompjs";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {keyframes} from "@angular/core/src/animation/dsl";
import {EncryptedCommand} from "../../model/encryptedCommand";

@Component({
  selector: "app-action-navigation-commands",
  templateUrl: "navigation-commands.component.html"
})

export class NavigationCommandsComponent {
  private readonly NAVIGATION_COMMANDS_TOPIC_MAPPING: string = "/topic/navigationCommands";
  private readonly NAVIGATION_COMMANDS_REQUEST_MAPPING: string = "/ws/navigationCommands/request";
  navigationCommands: EncryptedCommand[];
  displayedColumns = ["task", "command"];
  commandLength = 12;

  constructor(private stompService: StompService) {
    stompService.subscribe(this.NAVIGATION_COMMANDS_TOPIC_MAPPING)
      .subscribe((result) => {
        this.navigationCommands = JSON.parse(result.body).commands;
        console.log(this.navigationCommands);
      });
    setTimeout(() => { // TODO find the way to fix this
      this.stompService.publish(this.NAVIGATION_COMMANDS_REQUEST_MAPPING, "ololo");
    }, 1000);
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
