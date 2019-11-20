import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() chat;

  constructor() { }

  ngOnInit() {
  }

  newMessage: any;
  recipient: string;

  get messages() {
    return this.chat.messages;
  }

  addMessage() {
    this.chat.send(this.newMessage)
    this.newMessage = '';
  }
}
