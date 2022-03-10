import { ReactElement } from "react";

export type ConfirmProps = {
  onConfirm: () => void;
  title: string;
  description: string;
  defaultIsOpen?: boolean;
  confirmButtonText?: string; 
  onCancel?: () => void;
  children?: ReactElement
};