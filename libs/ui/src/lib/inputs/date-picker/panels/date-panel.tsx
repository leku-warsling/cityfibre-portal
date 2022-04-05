import {
  Button,
  chakra,
  Divider,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FC } from 'react';
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from 'react-icons/bi';
import useCalendar from '../use-calendar';
import { DAY_NAMES, MONTH_NAMES } from '../util';

const DatePanel: FC<ReturnType<typeof useCalendar>> = ({
  calendar,
  getBackProps,
  getForwardProps,
  getDateProps,
}) => {
  return (
    <chakra.div>
      <HStack w="100%" mb={2}>
        <IconButton
          variant="ghost"
          icon={<BiChevronsLeft fontSize="20px"/>}
          {...getBackProps({ offset: 12 })}
        />
        <IconButton
          variant="ghost"
          icon={<BiChevronLeft />}
          {...getBackProps({})}
        />
        <Heading size="xs" textAlign="center" flexGrow={1}>
          {MONTH_NAMES[calendar.month]} {calendar.year}
        </Heading>
        <IconButton
          variant="ghost"
          icon={<BiChevronRight />}
          {...getForwardProps({})}
        />
        <IconButton
          variant="ghost"
          icon={<BiChevronsRight />}
          {...getForwardProps({ offset: 12 })}
        />
      </HStack>
      <Divider />
      <chakra.table>
        <chakra.thead>
          <chakra.tr>
            {DAY_NAMES.map((wd) => (
              <chakra.th>{wd.substring(0, 2)}</chakra.th>
            ))}
          </chakra.tr>
        </chakra.thead>
        <chakra.tbody>
          {calendar.weeks.map((week, i) => (
            <chakra.tr key={`week-${i}`}>
              {week.map((day) => (
                <chakra.td>
                  <Button variant="ghost" {...getDateProps(day, {})}>
                    {day.getDate()}
                  </Button>
                </chakra.td>
              ))}
            </chakra.tr>
          ))}
        </chakra.tbody>
      </chakra.table>
    </chakra.div>
  );
};

export default DatePanel;
