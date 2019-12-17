import { OperatorFunction } from 'rxjs';
import {Message} from "./chat";

export interface Reply extends OperatorFunction<Message, string> {}

export class Bot {
  name: string;
  reply: Reply;

  constructor(name: string, reply: Reply) {
    this.name = name;
    this.reply = reply;
  }
}

export function hasWord(word: string) {
  return (msg: Message) => msg.text.indexOf(word) > -1;
}
