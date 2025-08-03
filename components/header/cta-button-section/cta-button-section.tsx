import CtaButton from "@/components/shared/cta-button/cta-button"
import { useTranslations } from "next-intl"

const CtaButtonSection = () => {
  const t = useTranslations("home.header.ctaButtonSection")
  return (
    <CtaButton>
      {t("text")}
    </CtaButton>
  )
}

export default CtaButtonSection