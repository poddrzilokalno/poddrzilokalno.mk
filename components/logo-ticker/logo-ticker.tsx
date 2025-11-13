"use client";

import { featuredCompanies } from "@/const";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment } from "react";

const LogoTicker = () => {
  const t = useTranslations("home.logoTicker");

  return (
    <section className="bg-blue-500 pt-26 overflow-x-clip">
      <div>
        <h3 className="text-base sm:text-lg md:text-xl text-white/70 text-center">
          {t("title")}
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <Fragment key={i}>
                {featuredCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="w-32 h-32s flex items-center justify-center bg-transparent"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
