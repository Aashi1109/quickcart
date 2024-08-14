import { cn } from "@/lib/utils";

const ReviewBar = ({
  widthFactor,
  count,
  rating,
}: {
  widthFactor: number;
  count: number;
  rating: number;
}) => {
  const barWidth = Math.floor(widthFactor * 100);
  return (
    <div className="flex-start gap-2">
      <p>{rating} star</p>
      <div
        className={cn(
          "w-32 h-3 bg-gray-100 border border-solid border-gray-300 rounded-full "
        )}
      >
        <div
          className={`rounded-full bg-gray-400 w-[${barWidth}%] h-full`}
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
      <p>{barWidth} %</p>
    </div>
  );
};

export default ReviewBar;
