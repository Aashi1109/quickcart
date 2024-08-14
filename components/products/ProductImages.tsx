import ImageViewer from "@/components/ImageViewer";
import React from "react";

interface ProductImagesProps {
  images: string[];
  title: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ images, title }) => (
  <div className="flex-1">
    <ImageViewer images={images ?? []} title={title || ""} />
  </div>
);

export default ProductImages;
