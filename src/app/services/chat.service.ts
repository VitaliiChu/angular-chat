import { Injectable } from "@angular/core";
import { Chat } from "../models/chat";
import {Bot} from "../models/bot";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats = new Map<string, Chat>();
  bots = new Map<string, Bot>();

  addBots(newBots: Bot[]): void {
    newBots.forEach(bot => this.bots.set(bot.name, bot));
  }

  getChat(activeContact) {
    if (!this.chats.has(activeContact)) {
      const newBot = this.bots.get(activeContact);
      this.chats.set(activeContact, new Chat(newBot));
    }

    return this.chats.get(activeContact);
  }
}
