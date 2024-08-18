import { IReview } from "@/types";
import ReviewBar from "./ReviewBar";

const ReviewPane = ({ reviews }: { reviews: IReview[] }) => {
  const maxRating = reviews.reduce(
    (max, review) => Math.max(max, review.rating),
    0
  );
  const maxRatingFloored = Math.floor(maxRating);
  const totalReviews = reviews.length;

  // create a map to store the frequency of the rating provided
  const ratingFrequency = new Map();

  reviews.forEach((review) => {
    const rating = Math.floor(review.rating);
    ratingFrequency.set(rating, (ratingFrequency.get(rating) || 0) + 1);
  });

  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-medium">Customer Reviews</p>
      <p className="font-light text-sm">{totalReviews} ratings</p>
      <div className="flex flex-col gap-2">
        {Array(maxRatingFloored)
          .fill(null)
          .map((_, index) => {
            const ratingCount = ratingFrequency.get(maxRating - index) || 0;
            return (
              <ReviewBar
                rating={maxRating - index}
                count={ratingCount}
                widthFactor={ratingCount / totalReviews}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ReviewPane;
