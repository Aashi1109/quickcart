import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";

interface IProps {
  scrollLeft: () => void;
  isLeftDisabled: boolean;
  actionButtonClass: string;
  scrollRight: () => void;
  isRightDisabled: boolean;
}

const ScrollActionButtons = ({
  isLeftDisabled,
  isRightDisabled,
  actionButtonClass,
  scrollLeft,
  scrollRight,
}: IProps) => {
  return (
    <div className="flex-center gap-6">
      <button type="button" onClick={scrollLeft} disabled={isLeftDisabled}>
        <MoveLeft
          className={cn(actionButtonClass, {
            "text-red-300": isLeftDisabled,
          })}
        />
      </button>

      <button
        type="button"
        className="group relative"
        onClick={scrollRight}
        disabled={isRightDisabled}
      >
        <MoveRight
          className={cn(
            `translate-x-[-50%] group-hover:translate-x-0 transition-transform`,
            actionButtonClass,
            { "text-red-300 translate-x-0": isRightDisabled }
          )}
        />
        <div className="h-6 w-6 border border-solid border-red-400 rounded-full absolute top-[-8%] left-0"></div>
      </button>
    </div>
  );
};

export default ScrollActionButtons;
