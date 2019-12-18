import { Observable, interval, merge } from 'rxjs';
import { filter, map, switchMap, delay, takeUntil } from 'rxjs/operators';

import { Bot, hasWord } from '../models/bot';
import {Message} from '../models/chat';

export const JOFFREY_BOT = new Bot('joffrey', iAmTheKing);

function iAmTheKing(message$: Observable<Message>): Observable<string> {
  const isWedding = hasWord('wedding');
  const wedding$ = filter(isWedding)(message$);

  return merge(
    message$.pipe(
      filter(m => !isWedding(m)),
      switchMap(m =>
        interval(3000).pipe(
          map(i => 'I am the king! '),
          takeUntil(wedding$)
        )
      )
    ),
    wedding$.pipe(
      delay(200),
      map(m => '🍷 cough... cough... cough... 💀')
    )
  );
}
