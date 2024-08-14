import Image from "next/image";
import Link from "next/link";

interface IProps {
  title: string;
  imageUrl: string;
  routeTo: string;
}
const CategoryCard = ({ title, imageUrl, routeTo }: IProps) => {
  return (
    <Link className="flex-center flex-col gap-2" href={routeTo}>
      <Image
        className="card bg-gray-200 object-contain py-5 px-10"
        src={imageUrl}
        alt={title}
        width={160}
        height={80}
      />
      <p className="text-wrap line-clamp-2">{title}</p>
    </Link>
  );
};

export default CategoryCard;
