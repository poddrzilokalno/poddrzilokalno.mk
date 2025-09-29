"use client";

import { useTranslations } from "next-intl";
import { services } from "@/const";
import AnimatedContent from "../animated/animated-content";
import FadeContent from "../animated/fade-content";
import ServiceCard from "./service-card";
import Tag from "../shared/tag/tag";
import Magnet from "../animated/magnet";
import CtaButton from "../shared/cta-button/cta-button";
import { CalendarDays } from "lucide-react";

const ServicesSection = () => {
  const t = useTranslations("home.services");

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedContent distance={100} direction="vertical" duration={1}>
            <Tag>{t("tagline")}</Tag>
          </AnimatedContent>

          <AnimatedContent
            distance={120}
            direction="vertical"
            duration={1.2}
            delay={0.2}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-950 mt-6">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="text-blue-500">{chunks}</span>
                ),
              })}
            </h2>
          </AnimatedContent>

          <FadeContent delay={600} duration={1000}>
            <p className="mt-6 text-lg font-medium text-neutral-600">
              {t("description")}
            </p>
          </FadeContent>

          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <div className="mt-8">
              <CtaButton icon={<CalendarDays className="h-4 w-4" />}>
                {t("ctaSection")}
              </CtaButton>
            </div>
          </Magnet>
        </div>

        <div className="grid mx-16 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeContent key={service.id} delay={index * 200} duration={800}>
              <ServiceCard service={service} />
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
