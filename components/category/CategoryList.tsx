import { categories } from "@/constants";
import CategoryCard from "./CategoryCard";

interface IProps {
  numberOfCardsToShow?: number;
  showAllCards?: boolean;
}

const CategoryList = ({
  numberOfCardsToShow = categories.viewLimit,
  showAllCards = false,
}: IProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="heading-1">Categories</p>
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-around">
        {categories.data
          .slice(0, showAllCards ? undefined : numberOfCardsToShow)
          .map((category) => (
            <CategoryCard
              key={category.slug}
              title={category.name}
              imageUrl={category.imageUrl}
              routeTo={category.url}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
