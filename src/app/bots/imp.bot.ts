import { Bot } from '../models/bot';
import { Observable } from 'rxjs';
import {delay, map, scan, throttleTime, bufferCount} from 'rxjs/operators';
import {Message} from '../models/chat';

export const IMP_BOT  = new Bot('imp', imp);


function imp(message$: Observable<Message>): Observable<string> {
  const jokes = ['joke1', 'joke2', 'joke3'];

  function getFreshArray() {
    const array: Array<string> = shuffle(jokes);
    array.push('');
    return array;
  }

  return message$.pipe(
    delay(200),
    throttleTime(5000),
    bufferCount(3),
    scan((arr: Array<string>, curr: any) => {
      if (arr.length <= 1) { arr = getFreshArray(); }
      return arr.slice(0, arr.length - 1);
    }, getFreshArray()),
    map(m => m[m.length - 1])
  );
}

function shuffle(array: Array<string>) {
  array = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
