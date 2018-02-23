import {Component, Input} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";

@Component({
  selector: "app-gm-chat",
  templateUrl: "gm-chat.component.html",
  styleUrls: [ "gm-chat.component.css" ]
})

export class GmChatComponent {
  private readonly GM_CHAT_MESSAGE_MAPPING: string = "/ws/gmChat";
  private readonly GM_CHAT_TOPIC_MAPPING: string = "/topic/gmChat";

  currentMessage: string;
  messages: UserMessage[];

  constructor(private authService: AuthService, private stompService: StompService) {
    this.messages = [];
    this.stompService.subscribe(this.GM_CHAT_TOPIC_MAPPING + "/" + this.authService.currentRole.name)
      .subscribe((result) => {
      const message: UserMessage = JSON.parse(result.body);
      this.messages.push(message);
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
      const message: UserMessage = {
        sender: this.authService.currentRole.name, body: this.currentMessage
      };
      this.stompService.publish(this.GM_CHAT_MESSAGE_MAPPING, JSON.stringify(message));
      this.messages.push(message);
      this.currentMessage = "";
    }
  }

}
