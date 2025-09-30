"use client";

import { useTranslations } from "next-intl";
import { aboutStats, aboutFeatures, images } from "@/const";
import { CheckCircle } from "lucide-react";
import AnimatedContent from "../animated/animated-content";
import CountUp from "../animated/count-up";
import FadeContent from "../animated/fade-content";
import Tag from "../shared/tag/tag";
import Stack from "../Stack";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const AboutSection = () => {
  const t = useTranslations("home.about");
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(min-width: 768px)");
  const isSmall = useMediaQuery("(min-width: 640px)");

  let cardDimensions;
  if (isLarge) {
    cardDimensions = { width: 550, height: 450 };
  } else if (isMedium) {
    cardDimensions = { width: 400, height: 300 };
  } else if (isSmall) {
    cardDimensions = { width: 350, height: 250 };
  } else {
    cardDimensions = { width: 250, height: 150 };
  }

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div>
            <AnimatedContent distance={100} direction="horizontal" duration={1}>
              <Tag>{t("tagline")}</Tag>
            </AnimatedContent>

            <AnimatedContent
              distance={120}
              direction="horizontal"
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
              <p className="mt-6 text-lg font-medium text-neutral-600 leading-relaxed">
                {t("description")}
              </p>
            </FadeContent>

            <div className="mt-8 space-y-4">
              {aboutFeatures.map((feature, index) => (
                <FadeContent
                  key={feature}
                  delay={800 + index * 100}
                  duration={600}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-neutral-700 font-medium">
                      {t(`features.${index}`)}
                    </span>
                  </div>
                </FadeContent>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {aboutStats.map((stat, index) => (
                <FadeContent
                  key={stat.id}
                  delay={1000 + index * 150}
                  duration={800}
                >
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-500">
                      <CountUp
                        from={0}
                        to={stat.value}
                        duration={2}
                        delay={1.2 + index * 0.2}
                      />
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-neutral-600 mt-1">
                      {t(`stats.${index}.label`)}
                    </div>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse
              duration={1.5}
              delay={0.5}
            >
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={cardDimensions}
                cardsData={images}
              />
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
