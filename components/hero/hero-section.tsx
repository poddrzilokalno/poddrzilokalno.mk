import React from "react";
import CtaButton from "../shared/cta-button/cta-button";
import { useTranslations } from "next-intl";
import { CalendarDays } from "lucide-react";
import Magnet from "../animated/magnet";
import AnimatedContent from "../animated/animated-content";
import CountUp from "../animated/count-up";
import LogoTicker from "../logo-ticker/logo-ticker";
import TextType from "../animated/text-type";

const HeroSection = () => {
  const t = useTranslations("home.hero");

  return (
    <section className="bg-blue-500 py-24">
      <div className="container mx-auto mt-12">
        <div className="flex flex-col justify-center items-center gap-8 max-w-5xl mx-auto">
          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <div className="py-1 px-3 sm:py-1.5 sm:px-4 bg-gradient-to-r from-yellow-100 to-yellow-400 rounded-full text-neutral-950 font-semibold text-xs sm:text-sm md:text-base">
              🚀{" "}
              <CountUp
                from={0}
                to={30}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              + {t("headline.tagline")}
            </div>
          </Magnet>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug font-medium text-white text-center">
              {t.rich("headline.title", {
                highlight: (chunks) => (
                  <span className="text-secondary">{chunks}</span>
                ),
              })}
            </h1>
          </AnimatedContent>

          <TextType
            as={"h2"}
            text={t("headline.subtitle")}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["text-white/70"]}
            className="mt-4 text-base sm:text-lg md:text-xl text-white/70 text-center"
          />

          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <div>
              <CtaButton icon={<CalendarDays className="h-4 w-4" />}>
                {t("ctaSection.text")}
              </CtaButton>
            </div>
          </Magnet>
        </div>
      </div>
      <LogoTicker />
    </section>
  );
};

export default HeroSection;
