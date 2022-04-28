import getDay from 'date-fns/getDay';
import equals from 'ramda/es/equals';
import { flow } from 'fp-ts/lib/function';
import { LegacyRef, MutableRefObject, RefCallback } from 'react';
import { always, subtract, when, curry } from 'ramda';
import is from 'ramda/es/is';
import { isNotNilOrEmpty } from 'ramda-adjunct';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAY_NAMES = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const isZero = equals(0);

const weekdaysBefore = flow(
  getDay,
  when(isZero, always(7)),
  subtract(1),
  Math.abs
);

type Element =
  | HTMLElement
  | HTMLInputElement
  | HTMLButtonElement
  | HTMLAnchorElement;

const triggerEvent = curry((eventName: string, el: Element) => {
  const event = new Event(eventName, { bubbles: true });
  el.dispatchEvent(event);
});

function mergeRefs<T = any>(
  ...refs: Array<MutableRefObject<T> | LegacyRef<T>>
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (is(Function, ref)) return ref(value);
      if (isNotNilOrEmpty(ref)) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}

export {
  DAY_NAMES,
  MONTH_NAMES,
  weekdaysBefore,
  triggerEvent,
  isZero,
  mergeRefs,
};
