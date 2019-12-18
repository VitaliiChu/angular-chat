import { Observable, from, interval } from 'rxjs';
import { switchMap, zip, map } from 'rxjs/operators';

import { Bot } from '../models/bot';
import { hodorYell } from './hodor-yell';

export const HODOR_BOT = new Bot('hodor', switchMap(holdTheDoor));

function holdTheDoor(): Observable<string> {
  return from(hodorYell).pipe(
    zip(interval(2000)),
    map<Array<any>, string>(z => z[0])
  );
}
