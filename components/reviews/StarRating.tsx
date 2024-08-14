import { StarHalf, StarIcon } from "lucide-react";
import React from "react";

// Star component to render full, half, and empty stars
const Star = ({ type }: { type: "full" | "half" | "empty" }) => {
  const iconSize = "w-4 h-4";
  const filledClassName = iconSize + " text-gray-600";
  const emptyClassName = iconSize + " text-gray-300";

  switch (type) {
    case "full":
      return <StarIcon className={filledClassName} fill="gray" />; // Full star
    case "half":
      return <StarHalf className={filledClassName} fill="gray" />; // Half star (you can change this to a custom half-star icon)
    case "empty":
      return <StarIcon className={emptyClassName} />; // Empty star
    default:
      return null;
  }
};

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxStars - fullStars - halfStar;

  return (
    <div className="flex gap-0.5 items-center">
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <Star key={`full-${index}`} type="full" />
        ))}
      {halfStar === 1 && <Star type="half" />}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <Star key={`empty-${index}`} type="empty" />
        ))}
    </div>
  );
};

export default StarRating;
