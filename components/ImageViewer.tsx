"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const ImageViewer = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [selectedImage, setSelectedImage] = useState(
    images.length ? images[0] : null
  );
  const loaderRef = useRef<HTMLDivElement>(null);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
    if (loaderRef.current) {
      loaderRef.current.style.display = "flex";
    }
  };
  const handleOnLoad = () => {
    if (loaderRef.current) {
      loaderRef.current.style.display = "none";
    }
  };

  return (
    <div className="flex gap-2 w-full h-[400px]">
      {/* div to show small previews */}
      <div className="flex flex-col gap-4">
        {images?.map((image, index) => (
          <Image
            className={cn(
              "rounded-md object-contain border-gray-200 cursor-pointer",
              {
                "border-2 border-solid border-gray-400":
                  selectedImage === image,
              }
            )}
            src={image}
            alt={title}
            key={index}
            width={60}
            height={60}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
      {/* div to show main preview */}
      {selectedImage && (
        <div className="relative w-full">
          <Image
            className="object-contain w-full h-full"
            src={selectedImage}
            alt={title}
            onLoad={handleOnLoad}
            fill
          />

          <div className="flex-center h-full w-full" ref={loaderRef}>
            <Loader2 className="animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
