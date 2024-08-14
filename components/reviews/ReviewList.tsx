import { IReview } from "@/types";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <p className="text-xl font-medium">Top reviews</p>
      <div className="flex flex-col gap-8">
        {reviews.map((review, index) => (
          <ReviewItem {...review} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
