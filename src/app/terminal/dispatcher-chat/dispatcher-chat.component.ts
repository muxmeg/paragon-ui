import {Component, Input} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";

@Component({
  selector: "app-dispatcher-chat",
  templateUrl: "dispatcher-chat.component.html",
  styleUrls: [ "dispatcher-chat.component.css" ]
})

export class DispatcherChatComponent {
  private readonly PUBLIC_CHAT_MESSAGE_MAPPING: string = "/ws/dispatcherChat";
  private readonly PUBLIC_CHAT_TOPIC_MAPPING: string = "/topic/dispatcherChat";
  private readonly MESSAGE_LIMIT: number = 20;

  currentMessage: string;
  messages: UserMessage[];

  constructor(private authService: AuthService, private stompService: StompService) {
    this.messages = [];
    this.stompService.subscribe(this.PUBLIC_CHAT_TOPIC_MAPPING).subscribe((result) => {
      const message: UserMessage = JSON.parse(result.body);
      if (this.messages.length >= this.MESSAGE_LIMIT) {
        this.messages.splice(0, 1);
      }
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
      this.stompService.publish(this.PUBLIC_CHAT_MESSAGE_MAPPING, JSON.stringify({
        sender: this.authService.currentRole.name, body: this.currentMessage
      }));
      this.currentMessage = "";
    }
  }

}
