import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chats = new Map();

  getChat(activeContact) {
    if (!this.chats.has(activeContact)) {
      this.chats.set(activeContact, new Chat(activeContact));
    }

    return this.chats.get(activeContact);
  }
}
