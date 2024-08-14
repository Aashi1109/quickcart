import { IProduct } from "@/types";
import { PackageCheck, PackageOpen, ShieldCheck, Truck } from "lucide-react";
import React from "react";

interface ProductInfoProps {
  productData: IProduct;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ productData }) => (
  <div className="flex-start gap-4">
    {productData.warrantyInformation && (
      <div className="flex flex-col gap-2 flex-center text-gray-500 w-24">
        <ShieldCheck className="w-6 h-6" />
        <p className="text-center text-sm">{productData.warrantyInformation}</p>
      </div>
    )}
    {productData.shippingInformation && (
      <div className="flex flex-col gap-2 flex-center text-gray-500 w-24">
        <Truck className="w-6 h-6" />
        <p className="text-center text-sm">{productData.shippingInformation}</p>
      </div>
    )}
    <div className="flex flex-col gap-2 flex-center text-gray-500 w-24">
      <PackageCheck className="w-6 h-6" />
      <p className="text-center text-sm">Package checked</p>
    </div>
    <div className="flex flex-col gap-2 flex-center text-gray-500 w-24">
      <PackageOpen className="w-6 h-6" />
      <p className="text-center text-sm">Open Box Delivery</p>
    </div>
  </div>
);

export default ProductInfo;
