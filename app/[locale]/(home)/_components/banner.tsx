import { ArrowRight } from "lucide-react";

export const Banner = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className="text-white/60 hidden md:block">
        Streamline your workflow and boost your productivity
      </p>
      <div className="inline-flex gap-1 items-center">
        <p>Get started for free</p>
        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
      </div>
    </div>
  );
};
