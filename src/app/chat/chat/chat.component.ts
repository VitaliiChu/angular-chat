import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() chat: Chat;

  constructor() {
  }

  ngOnInit() {
  }

  get messages() {
    return this.chat.messages;
  }

  addMessage(message) {
    // console.log(message)
    this.chat.send(message)
  }
}
