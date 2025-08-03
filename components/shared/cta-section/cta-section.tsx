import CtaButton from "@/components/shared/cta-button/cta-button";
import { CalendarDays } from "lucide-react";

interface CtaSectionProps {
  buttonLabel: string;
}

const CtaSection = ({ buttonLabel }: CtaSectionProps) => {
  return (
    <div>
      <CtaButton icon={<CalendarDays className="h-4 w-4" />}>
        {buttonLabel}
      </CtaButton>
    </div>
  );
};

export default CtaSection;
