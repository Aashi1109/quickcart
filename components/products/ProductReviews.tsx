import React from "react";

import { IReview } from "@/types";
import { ReviewList, ReviewPane } from "@/components/reviews";

interface ProductReviewsProps {
  reviews: IReview[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => (
  <div className="flex gap-16 flex-col sm:flex-row">
    <ReviewPane reviews={reviews} />
    <ReviewList reviews={reviews} />
  </div>
);

export default ProductReviews;
