import { MouseEvent } from "react";

export interface IRenderProps {
  handleClick: (event: MouseEvent<HTMLButtonElement | SVGSVGElement | HTMLDivElement>) => void;
  isProductAddedToCart: boolean;
}
