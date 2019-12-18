import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import {DANY_BOT} from './bots/dany.bot';
import {HODOR_BOT} from './bots/hodor.bot';
import {JOFFREY_BOT} from './bots/joffrey.bot';
import {IMP_BOT} from './bots/imp.bot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ChatService]
})
export class AppComponent {
  title = 'angular-chat';
  bots = [DANY_BOT, HODOR_BOT, JOFFREY_BOT, IMP_BOT];
  contacts = this.bots.map(bot => bot.name);

  constructor(private chatService: ChatService) {
    this.chatService.addBots(this.bots);
  }
}
