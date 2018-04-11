import {Component, Input} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";
import {RolesService} from "../roles.service";
import {Role} from "../../model/role";

@Component({
  selector: "app-private-chat",
  templateUrl: "private-chat.component.html",
  styleUrls: [ "private-chat.component.css" ]
})

export class PrivateChatComponent {
  private readonly PRIVATE_CHAT_MESSAGE_MAPPING: string = "/ws/privateChat";
  private readonly PRIVATE_CHAT_TOPIC_MAPPING: string = "/topic/privateChat";
  private readonly ANONYMOUS_ROLE: string = "anonymous";
  private readonly MESSAGE_LIMIT: number = 100;

  currentMessage: string;
  currentRecipient: string;
  recipientOptions: string[];
  messages: UserMessage[];

  constructor(private authService: AuthService, private stompService: StompService, rolesService: RolesService) {
    this.messages = [];
    this.stompService.subscribe(this.PRIVATE_CHAT_TOPIC_MAPPING + "/" + this.authService.currentRole.name)
      .subscribe((result) => {
      const message: UserMessage = JSON.parse(result.body);
      if (this.messages.length >= this.MESSAGE_LIMIT) {
        this.messages.splice(0, 1);
      }
      if (message.sender === this.ANONYMOUS_ROLE) {
        this.recipientOptions.push(this.ANONYMOUS_ROLE);
      }
      this.messages.push(message);
    });
    rolesService.findTeamMembers(this.authService.currentRole.team).subscribe((result: string[]) => {
      this.recipientOptions = result.filter(role => role !== this.authService.currentRole.name);
      this.currentRecipient = this.recipientOptions[0];
    });
  }

  onEnterPress($event: KeyboardEvent) {
    if ($event.keyCode === 13) {
      this.sendMessage();
    }
  }

  sendMessage() {
    if (this.currentMessage) {
      console.log(this.currentMessage);
      const message: UserMessage = {sender: this.authService.currentRole.name, body: this.currentMessage,
        target: this.currentRecipient};
      this.stompService.publish(this.PRIVATE_CHAT_MESSAGE_MAPPING, JSON.stringify(message));
      this.messages.push(message);
      this.currentMessage = "";
    }
  }

}
