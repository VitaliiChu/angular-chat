import { Component } from '@angular/core';
import { Chat } from './chat/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeContact: any;
  title = 'my-app';
  activeChat: Chat;

  chats = new Map();

  selectContact(contact) {
    this.activeContact = contact;
    this.activeChat = this.getChat(contact);
  }

  isSelected(contact) {
    return this.activeContact === contact;
  }

  getChat(activeContact) {
    if (!this.chats.has(activeContact)) {
      this.chats.set(activeContact, new Chat(activeContact))
    } 

    return this.chats.get(activeContact);
  }
}
