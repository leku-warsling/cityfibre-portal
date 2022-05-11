import { FC, ReactElement, ReactNode } from "react";

export type ConditionalWrapperProps = {
  condition: boolean
  wrapper: (children: ReactElement) => React.ReactElement;
  children: ReactElement
}

const ConditionalWrapper: FC<ConditionalWrapperProps> = ({ 
  condition, 
  wrapper, 
  children 
}) => condition ? wrapper(children) : children;

export default ConditionalWrapper