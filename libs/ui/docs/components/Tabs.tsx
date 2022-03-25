import {
  Tabs as _Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabsProps as _TabsProps,
} from '@chakra-ui/react';
import omit from 'ramda/es/omit';
import { FC, ReactElement } from 'react';

type TabsProps = _TabsProps & {
  children: ReactElement[];
};

const Tabs: FC<TabsProps> = ({ children, ...props }) => (
  <_Tabs {...omit(["className"], props)}>
    <TabList>
      {children.map(({ props: { title } }, idx) => {
        return <Tab key={`tab-${title}-${idx}`}>{title}</Tab>;
      })}
    </TabList>
    <TabPanels>
      {children}
    </TabPanels>
  </_Tabs>
);

export { Tabs, TabPanel };
