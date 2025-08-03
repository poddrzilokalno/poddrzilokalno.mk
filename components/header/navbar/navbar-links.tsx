import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  className?: string;
  content: string;
}

const NavbarLink = ({ href, className, content }: NavbarLinkProps) => {
  const t = useTranslations("home.header.navbar");

  return (
    <Link href={href} className={className} prefetch={false}>
      {t(content)}
    </Link>
  );
};

export default NavbarLink;
