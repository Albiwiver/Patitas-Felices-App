import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface buttonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}
