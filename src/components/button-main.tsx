import { ComponentProps } from "react";

import { ButtonVariants, buttonVariants } from "./button-variants";

export type ButtonProps = ComponentProps<"button"> &
  ButtonVariants & {
    children: React.ReactNode;
  };

export const ButtonStorie = ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};
