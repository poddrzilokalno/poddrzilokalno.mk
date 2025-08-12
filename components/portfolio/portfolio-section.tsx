"use client";

import { useTranslations } from "next-intl";
import { portfolioItems } from "@/const";
import AnimatedContent from "../animated/animated-content";
import FadeContent from "../animated/fade-content";
import PortfolioCard from "./portfolio-card";
import Tag from "../shared/tag/tag";

const PortfolioSection = () => {
  const t = useTranslations("home.portfolio");

  return (
    <section className="py-24 bg-blue-500" id="portfolio">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-6">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="text-secondary">{chunks}</span>
                ),
              })}
            </h2>
          </AnimatedContent>

          <FadeContent delay={600} duration={1000}>
            <p className="mt-6 text-lg text-white/70">{t("description")}</p>
          </FadeContent>
        </div>

        <div className="grid mx-16 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <FadeContent key={item.id} delay={index * 150} duration={800}>
              <PortfolioCard item={item} />
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
