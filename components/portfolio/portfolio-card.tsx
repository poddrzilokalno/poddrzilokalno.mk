"use client";

import type { PortfolioItem } from "@/const";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Magnet from "@/components/animated/magnet";
import Link from "next/link";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const t = useTranslations("home.portfolio.items");

  return (
    <Link href={item.link} target="_blank">
      <Magnet padding={20} magnetStrength={20}>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={t(`${item.id}.title`)}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-secondary text-neutral-950 text-xs font-semibold rounded-full">
                {t(`${item.id}.category`)}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {t(`${item.id}.title`)}
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              {t(`${item.id}.description`)}
            </p>
          </div>
        </div>
      </Magnet>
    </Link>
  );
};

export default PortfolioCard;
