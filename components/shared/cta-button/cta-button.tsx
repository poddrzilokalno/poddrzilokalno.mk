import { cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

const ctaButtonVariants = cva(
  "border h-12 rounded-full px-6 font-medium cursor-pointer inline-flex items-center gap-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white text-neutral-950 border-primary hover:bg-primary/90",
        secondary: "border-white text-white bg-transparent",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface CtaButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
  icon?: ReactNode;
}

const CtaButton = ({
  variant = "primary",
  className,
  icon,
  children,
  ...props
}: CtaButtonProps) => (
  <button className={ctaButtonVariants({ variant, className })} {...props}>
    {icon && <span className="flex items-center">{icon}</span>}
    {children}
  </button>
);

export default CtaButton;
