import {delay, filter, map, mapTo, scan, switchMap, takeUntil, tap} from "rxjs/operators";
import {BehaviorSubject, interval, merge, Observable, Subject} from "rxjs";
import {Bot} from "./bot";

export class Message {
  constructor(public text: string, public sentBy: string) {
  }
}

export class Chat {
  constructor(bot: Bot) {
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
      filter((msg: Message) => msg.sentBy !== bot),
      bot.reply,
      map((msg: string) => {
        return {
          text: msg,
          sentBy: bot
        };
      })
    ).subscribe(this.newMessage$);
  }
}

// function says(message$: Observable<string>): Observable<string> {
//   const msg1: string = "I am the Queen!";
//   const msg2: string = "I need your love";
//
//   const isStop = hasWord("stop");
//   const stop$ = filter(isStop)(message$);
//
//   // @ts-ignore
//   return merge(
//     message$.pipe(
//       filter(m => !isStop(m)),
//       delay(200),
//       switchMap(m =>
//         interval(1000).pipe(
//           scan(acc => !acc, false),
//           map(m => m ? msg1 : msg2),
//           takeUntil(stop$)
//         )
//       )
//     ),
//     stop$.pipe(
//       delay(200),
//       mapTo("Ok, then")
//     )
//   );
// }

export function hasWord(word: string): (message: string) => boolean {
  return (m: string) => {
    return testForWord(m, word);
  };
}

function testForWord(message: string, word: string) {
  return message.split(/\s+/).indexOf(word) > -1;
};
