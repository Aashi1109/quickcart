import { IReview } from "@/types";
import Image from "next/image";
import StarRating from "./StarRating";

const ReviewItem = ({ reviewerName, comment, rating }: IReview) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-start gap-4">
        <Image
          src={"https://avatar.iran.liara.run/public"}
          alt={reviewerName}
          width={30}
          height={30}
          className="object-contain"
        />
        <p>{reviewerName}</p>
      </div>
      <StarRating rating={rating} />
      <p className="text-sm">{comment}</p>
    </div>
  );
};

export default ReviewItem;
