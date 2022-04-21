import { Timestamp } from "firebase/firestore";

export enum ProductType {
  cake = "cake",
  cupcake = "cupcake",
  brownie = "brownie",
  donut = "donut",
}

interface PriceList {
  layers?: string;
  size: string;
  price: number;
  salePrice: number;
  isOnSale: boolean;
  isGlutenFreeOption?: boolean;
}

export interface Product {
  type: ProductType;
  name: string;
  imageUrl: string;
  pricing: Array<PriceList>;
  added?: Timestamp;
}
