import {filter, map, scan} from "rxjs/operators";
import {BehaviorSubject, Subject} from "rxjs";
import {Bot} from "./bot";

export class Message {
  constructor(public text: string, public sentBy: string) {
  }
}

export class Chat {
  bot: Bot;
  constructor(bot: Bot) {
    this.bot = bot;
    this.subscribeBot(bot);
    this.newMessage$.pipe(
      scan((acc: Message[], curr: Message) => {
        return [...acc, curr];
      }, [])
    ).subscribe(this.messages$);
  }

  messages$: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  newMessage$: Subject<Message> = new Subject<Message>();

  send(message: string) {
    this.newMessage$.next(new Message(message, 'user'));
  }

  subscribeBot(bot: Bot) {
    this.newMessage$.pipe(
      filter((msg: Message) => msg.sentBy !== bot.name),
      bot.reply,
      map((msg: string) => {
        return {
          text: msg,
          sentBy: bot.name
        };
      })
    ).subscribe(this.newMessage$);
  }
}
