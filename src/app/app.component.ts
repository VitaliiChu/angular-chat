import { Component } from '@angular/core';
import { Chat } from './models/chat';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ChatService]
})
export class AppComponent {
  activeContact: string;
  title = 'my-app';
  activeChat: Chat;
  contacts = [
    'hodor',
    'dany',
    'imp'
  ];

  constructor(private chatService: ChatService) {
  }

  selectContact(contact) {
    this.activeContact = contact;
    this.activeChat = this.chatService.getChat(contact);
  }

  isSelected(contact) {
    return this.activeContact === contact;
  }
}
