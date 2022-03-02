import {
  Breadcrumb as _Breadcrumb,
  BreadcrumbProps,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import { FC } from 'react';

type BreadcrumbComponent = FC<BreadcrumbProps> & {
  Item: typeof BreadcrumbItem,
  Link: typeof BreadcrumbLink,
  Seperator: typeof BreadcrumbSeparator
}

const Breadcrumb = _Breadcrumb as BreadcrumbComponent

Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Link = BreadcrumbLink
Breadcrumb.Seperator = BreadcrumbSeparator

export default Breadcrumb