import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatProps,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type StatisticOwnProps = {
  label: string;
  children: string | number;
  isLoading?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  description?: ReactNode;
  formatter?: (value: string | number) => ReactNode;
};

export type StatisticProps = StatisticOwnProps & StatProps;

const Statistic: FC<StatisticProps> = ({
  children,
  description,
  prefix,
  suffix,
  formatter,
  label,
  ...props
}) => (
  <Stat {...props}>
    <StatLabel>{label}</StatLabel>
    <StatNumber>
      {prefix}
      {formatter ? formatter(children) : children}
      {suffix}
    </StatNumber>
    {description && <StatHelpText>{description}</StatHelpText>}
  </Stat>
);

export default Statistic;
