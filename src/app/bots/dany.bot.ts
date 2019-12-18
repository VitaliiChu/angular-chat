import {interval, merge, Observable} from 'rxjs';
import {
  delay,
  filter,
  map,
  mapTo,
  scan,
  switchMap,
  takeUntil
} from 'rxjs/operators';

import {Bot, hasWord} from '../models/bot';
import {Message} from '../models/chat';

export const DANY_BOT = new Bot('dany', says);

function says(message$: Observable<Message>): Observable<string> {
  const msg1 = 'I am the Queen!';
  const msg2 = 'I need your love';

  const isStop = hasWord('stop');
  const stop$ = filter(isStop)(message$);

  return merge(
    message$.pipe(
      filter(m => !isStop(m)),
      delay(200),
      switchMap(_ =>
        interval(1000)
          .pipe(
            scan((acc: boolean, curr: any) => !acc, false),
            map(m => (m ? msg1 : msg2)),
            takeUntil(stop$)
          )
      )
    ),
    stop$.pipe(delay(200), mapTo('Ok, then'))
  );
}
