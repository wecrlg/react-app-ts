import { ReactNode } from "react";

export type StoreItemCardType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type ShoppingCartContextProviderType = {
  children: ReactNode;
};

export type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export type StoreItemsType = {
  id: number;
  quantity: number;
};
