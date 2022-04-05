import startOfMonth from 'date-fns/startOfMonth';
import sub from 'date-fns/fp/sub';
import { both, splitEvery, times, juxt } from 'ramda';
import add from 'date-fns/fp/add';
import {
  UseCalendarState,
  Calendar,
  NavigationButtonProps,
  DateButtonProps,
} from './types';
import isAfter from 'date-fns/fp/isAfter';
import isBefore from 'date-fns/fp/isBefore';
import formatter from 'date-fns/fp/format';
import { weekdaysBefore } from './util';
import { flow, pipe } from 'fp-ts/lib/function';
import plural from 'pluralize';
import { useState } from 'react';

const defaultMinDate = sub({ years: 100 }, new Date());
const defaultMaxDate = add({ years: 3 }, new Date());
const noop = () => {};

const getCalendarMonth = (dt: number | Date) => {
  const SOM = startOfMonth(dt);
  const startAt = sub({ days: weekdaysBefore(SOM) }, SOM);
  const period = times((n) => add({ days: n }, startAt), 42);
  return splitEvery(7, period);
};

const getNavigationProps = (
  direction: 'forward' | 'back',
  calendar: Calendar
) => {
  const op = direction === 'forward' ? add : sub;

  return ({ offset = 1, onClick = noop, ...rest }: NavigationButtonProps) => {
    const value = op({ months: offset }, calendar.date);

    return {
      'aria-label': `Go ${direction} ${offset} ${plural('month', offset)}`,
      onClick: () => pipe(value, juxt([calendar.setDate, onClick])),
      disabled: calendar.inRange(value),
      ...rest,
    };
  };
};

const getDateProps = (calendar: Calendar) => {
  return (date: Date, { onClick = noop, ...rest }: DateButtonProps) => ({
    onClick: () => pipe(date, juxt([calendar.setDate, calendar.onSelect, onClick])),
    disabled: calendar.month !== date.getMonth(),
    "aria-label": date.toDateString(),
    role: "button",
    ...rest
  });
};

const useCalendar = ({
  initialDate = new Date(),
  format = 'dd/MM/yyyy',
  min = defaultMaxDate,
  max = defaultMinDate,
  onSelect,
}: UseCalendarState) => {
  const [date, setDate] = useState(initialDate);

  const calendar = {
    onSelect: flow(formatter(format), onSelect),
    inRange: both(isBefore(max), isAfter(min)),
    weeks: getCalendarMonth(date),
    year: date.getFullYear(),
    month: date.getMonth(),
    setDate,
    date,
  };

  return {
    calendar,
    getBackProps: getNavigationProps('back', calendar),
    getForwardProps: getNavigationProps('forward', calendar),
    getDateProps: getDateProps(calendar),
  };
};

export default useCalendar;
