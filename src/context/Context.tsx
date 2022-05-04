import React, { createContext, ReactNode, useState } from "react";
import vehicles from "../vehicles.json";

type ContextProps = {
  children: ReactNode;
};

type obj = {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string[];
  category: {};
};

export type currentCart = {
  cart: obj[];
  setCart: (cenas: obj[]) => void;
};

const cartDefault: currentCart = {
  cart: [],
  setCart: () => {},
};

export const GlobalContextCart = createContext<currentCart>(cartDefault);

export const CartContext = ({ children }: ContextProps) => {
  const [cart, setCart] = useState(cartDefault.cart);

  return (
    <GlobalContextCart.Provider value={{ cart, setCart }}>
      {children}
    </GlobalContextCart.Provider>
  );
};
