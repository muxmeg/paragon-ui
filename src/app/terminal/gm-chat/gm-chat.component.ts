import {Component, EventEmitter, Output} from "@angular/core";
import {UserMessage} from "../../model/userMessage";
import {StompService} from "@stomp/ng2-stompjs";
import {AuthService} from "../../shared/authentication.service";
import {RolesService} from "../roles.service";

@Component({
  selector: "app-gm-chat",
  templateUrl: "gm-chat.component.html",
  styleUrls: ["gm-chat.component.css"]
})

export class GmChatComponent {
  private readonly GM_CHAT_MESSAGE_MAPPING: string = "/ws/gmChat";
  private readonly GM_CHAT_TOPIC_MAPPING: string = "/topic/gmChat";
  private readonly GM_ROLE: string = "GM";

  currentMessage: string;
  messages: UserMessage[];
  currentRecipient: string;
  recipientOptions: string[];
  gmMode: boolean;

  @Output() messageReceive: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService, private stompService: StompService, rolesService: RolesService) {
    this.messages = [];
    this.stompService.subscribe(this.GM_CHAT_TOPIC_MAPPING + "/" + this.authService.currentRole.name)
      .subscribe((result) => {
        const message: UserMessage = JSON.parse(result.body);
        this.messages.push(message);
        if (message.sender !== this.authService.currentRole.name) {
          this.messageReceive.emit();
        }
      });
    this.gmMode = authService.currentRole.name === this.GM_ROLE;
    if (this.gmMode) {
      rolesService.findTeamMembers().subscribe((result: string[]) => {
        this.recipientOptions = result.filter(role => role !== this.authService.currentRole.name);
        this.currentRecipient = this.recipientOptions[0];
      });
    }
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
        sender: this.authService.currentRole.name, body: this.currentMessage,
        target: this.gmMode ? this.currentRecipient : this.GM_ROLE
      };
      this.stompService.publish(this.GM_CHAT_MESSAGE_MAPPING, JSON.stringify(message));
      this.messages.push(message);
      this.currentMessage = "";
    }
  }

}
