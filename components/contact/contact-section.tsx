"use client";

import { CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimatedContent from "../animated/animated-content";
import FadeContent from "../animated/fade-content";
import Magnet from "../animated/magnet";
import Tag from "../shared/tag/tag";
import CtaButton from "../shared/cta-button/cta-button";
import Link from "next/link";

const ContactSection = () => {
  const t = useTranslations("home");

  return (
    <section className="py-24 bg-blue-500" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedContent distance={100} direction="vertical" duration={1}>
            <Tag>{t("contact.tagline")}</Tag>
          </AnimatedContent>

          <AnimatedContent
            distance={120}
            direction="vertical"
            duration={1.2}
            delay={0.2}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-6">
              {t.rich("contact.title", {
                highlight: (chunks) => (
                  <span className="text-secondary">{chunks}</span>
                ),
              })}
            </h2>
          </AnimatedContent>

          <FadeContent delay={600} duration={1000}>
            <p className="mt-6 text-lg font-medium text-white/70">
              {t("contact.description")}
            </p>
          </FadeContent>

          <div className="mt-12 flex justify-center items-center">
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <Link
                href="https://cal.com/supportlocal/30min?user=supportlocal&overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CtaButton icon={<CalendarDays className="h-4 w-4" />}>
                  {t("header.ctaSection.text")}
                </CtaButton>
              </Link>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
