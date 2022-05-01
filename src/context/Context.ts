import React,{ createContext,ReactNode, useState } from 'react';
import vehicles from "../../src/vehicles.json";


type ContextProps = {
    children: ReactNode;
}

type obj = {
    id: number,
    name:string,
    price:number,
    description: string,
    img: string[],
    category: {},
}

export type currentCart = {
    cart: obj[],
    setPost: (newState:obj[]) => void
}

const cartDefault ={
    cart:[],
    setPost: ()=> {},
}

export const GlobalContextCart = createContext<currentCart>(cartDefault);


export const CartContext = ({children}: ContextProps) =>{
/*
    const [cart,setCart] = useState(cartDefault.cart);

    return(
        <GlobalContextCart.Provider value={{cart,setCart}}>
         {children}
        </GlobalContextCart.Provider>
    );
    */

}