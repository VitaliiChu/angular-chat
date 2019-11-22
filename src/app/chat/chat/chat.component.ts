import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chat } from '../../models/chat';
import { ChatService } from '../../services/chat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chat: Chat;

  constructor(private route: ActivatedRoute, private chatService: ChatService) {
    this.route.params.subscribe(p => {
      this.chat = chatService.getChat(p.contact);
    });
  }

  ngOnInit() {
  }

  get messages() {
    return this.chat.messages;
  }

  addMessage(message) {
    this.chat.send(message);
  }
}
