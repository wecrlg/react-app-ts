import { createContext, useContext, useState } from "react";
import {
  ShoppingCartContextProviderType,
  ShoppingCartContextType,
  StoreItemsType,
} from "../Types/Type";

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingContextProvider({
  children,
}: ShoppingCartContextProviderType) {
  const [storeItems, setStoreItems] = useState<StoreItemsType[]>([]);
  function getItemQuantity(id: number) {
    return storeItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setStoreItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) === null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setStoreItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setStoreItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
