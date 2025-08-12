"use client";

import type { Service } from "@/const";
import { useTranslations } from "next-intl";
import Magnet from "@/components/animated/magnet";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const t = useTranslations("home.services.items");

  return (
    <Magnet padding={20} magnetStrength={20}>
      <div className="bg-white border border-neutral-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 group">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6 group-hover:bg-secondary transition-colors duration-300">
          <service.icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-semibold text-neutral-950 mb-4">
          {t(`${service.id}.title`)}
        </h3>

        <p className="text-neutral-600 mb-6 leading-relaxed">
          {t(`${service.id}.description`)}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-neutral-600"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
              {t(`${service.id}.features.${index}`)}
            </li>
          ))}
        </ul>
      </div>
    </Magnet>
  );
};

export default ServiceCard;
