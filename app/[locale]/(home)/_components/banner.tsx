import { ArrowRight } from "lucide-react";

export const Banner = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-blue-500 text-white text-sm gap-3">
      <p className="text-white/60 hidden md:block">
        Дали сакаш да го убрзаш твојот процес?
      </p>

      <div className="group relative inline-flex items-center gap-1 cursor-pointer transition-transform duration-300 hover:scale-105">
        <a href="#" className="font-medium relative">
          Види тука за повеќе детали
        </a>
        <ArrowRight className="h-4 w-4" />

        <span className="absolute left-1/2 -bottom-0.5 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </div>
    </div>
  );
};
