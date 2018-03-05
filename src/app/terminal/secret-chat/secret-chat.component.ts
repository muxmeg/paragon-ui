import {Component, Input} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";
import {RolesService} from "../roles.service";
import {Role} from "../../model/role";

@Component({
  selector: "app-secret-chat",
  templateUrl: "secret-chat.component.html",
  styleUrls: [ "secret-chat.component.css" ]
})

export class SecretChatComponent {
  private readonly ANONYMOUS_ROLE: string = "anonymous";
  private readonly SECRET_CHAT_MESSAGE_MAPPING: string = "/ws/privateChat";
  private readonly SECRET_CHAT_TOPIC_MAPPING: string = "/topic/privateChat/" + this.ANONYMOUS_ROLE;
  private readonly MESSAGE_LIMIT: number = 100;

  currentMessage: string;
  currentRecipient: string;
  recipientOptions: string[];
  messages: UserMessage[];

  constructor(private authService: AuthService, private stompService: StompService, rolesService: RolesService) {
    this.messages = [];
    this.stompService.subscribe(this.SECRET_CHAT_TOPIC_MAPPING)
      .subscribe((result) => {
      const message: UserMessage = JSON.parse(result.body);
      if (this.messages.length >= this.MESSAGE_LIMIT) {
        this.messages.splice(0, 1);
      }
      this.messages.push(message);
    });
    rolesService.findTeamMembers("ship").subscribe((result: string[]) => {
      this.recipientOptions = result.filter(role => role !== this.authService.currentRole.name)
        .map(role => role);
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
      const message: UserMessage = {sender: this.ANONYMOUS_ROLE, body: this.currentMessage,
        target: this.currentRecipient};
      this.stompService.publish(this.SECRET_CHAT_MESSAGE_MAPPING, JSON.stringify(message));
      this.messages.push(message);
      this.currentMessage = "";
    }
  }

}
