import React from "react";
import Tag from "../shared/tag/tag";
import { useTranslations } from "next-intl";
import CompanyColumns from "./company-columns/company-columns";
import { featuredCompanies } from "@/const";

const FeaturedCompaniesSection = () => {
  const t = useTranslations("home.featuredCompanies");

  return (
    <section className="p-24 overflow-hidden bg-blue-500">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>{t("tagline")}</Tag>
            <h2 className="text-6xl text-white font-medium mt-6 ">
              Lorem ipsum dolor <span className="text-secondary">sit amet</span>
            </h2>
            <p className="mt-4 text-lg text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              odio deleniti, necessitatibus veniam rem obcaecati consectetur
              delectus, accusamus libero, facilis iusto hic culpa quidem dicta
              sapiente at. Facere, illum molestias!
            </p>
          </div>
          <div>
            <div className="h-[400px] mt-8 lg:mt-0 px-8 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <CompanyColumns companies={featuredCompanies} />
              <CompanyColumns
                className="hidden md:flex"
                companies={featuredCompanies.slice().reverse()}
                reverse={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompaniesSection;
