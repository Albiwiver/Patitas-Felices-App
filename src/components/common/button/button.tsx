import { FC } from "react";
import { buttonProps } from "./buttonType";

export const Button: FC<buttonProps> = ({
  className,
  label,
  type,
  onClick,
  icon,
  iconPosition,
}: buttonProps) => {
  return (
    <button
      className={` flex items-center justify-center rounded-md gap-2 cursor-pointer lg:shadow-neutral-400 shadow-lg lg:hover:bg-tertiary ${className}`}
      type={type}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && icon}
      {label}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};
