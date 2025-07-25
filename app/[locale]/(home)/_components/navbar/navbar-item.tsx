interface NavbarItemProps {
  label: string;
  href: string;
  active: boolean;
  onClick: () => void;
}

export const NavbarItem = ({
  label,
  href,
  active,
  onClick,
}: NavbarItemProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-1 pb-1 border-b-2 ${
        active
          ? "border-blue-500 text-blue-500"
          : "border-transparent text-black/60 hover:text-blue-500"
      } transition-colors duration-300`}
    >
      {label}
    </a>
  );
};
