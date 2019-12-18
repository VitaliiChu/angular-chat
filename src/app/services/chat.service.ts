import { Injectable } from "@angular/core";
import { Chat } from "../models/chat";
import {DANY_BOT} from '../bots/dany.bot';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats = new Map<string, Chat>();

  getChat(activeContact) {
    if (!this.chats.has(activeContact)) {
      this.chats.set(activeContact, new Chat(DANY_BOT));
    }

    return this.chats.get(activeContact);
  }
}
