import { Component } from "@angular/core";
import { Chat } from "../../models/chat";
import { ChatService } from "../../services/chat.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent {
  chat: Chat;

  constructor(private route: ActivatedRoute, private chatService: ChatService) {
    this.route.params.subscribe(p => {
      this.chat = this.chatService.getChat(p.contact);
    });
  }

  get messages() {
    return this.chat.messages$;
  }

  addMessage(message) {
    this.chat.send(message);
  }
}
