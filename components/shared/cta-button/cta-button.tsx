import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const ctaButtonVariants = cva("border h-12 rounded-full px-6 font-medium cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-primary text-white text-neutral-950 border-primary hover:bg-primary/90",
      secondary: "border-white text-white bg-transparent",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface CtaButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
}

const CtaButton = ({
  variant = "primary",
  className,
  ...props
}: CtaButtonProps) => (
  <button
    className={ctaButtonVariants({ variant, className })}
    {...props}
  />
);

export default CtaButton;
