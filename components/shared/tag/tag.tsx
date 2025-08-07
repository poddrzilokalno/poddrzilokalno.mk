import { twMerge } from "tailwind-merge";

interface TagProps {
  className?: string;
  children: React.ReactNode;
}

const Tag = ({ className, children }: TagProps) => {
  return (
    <div
      className={twMerge(
        "inline-flex border-2 border-secondary text-secondary gap-2 px-3 py-1 rounded-full uppercase items-center",
        className
      )}
    >
      <span>&#10038;</span>
      <span className="text-sm font-semibold">{children}</span>
    </div>
  );
};

export default Tag;
