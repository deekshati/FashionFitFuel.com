import { Children } from "react";
import { createContext,useState,useContext } from "react";


export const LoginContext = createContext(null);
export const  ItemContext = createContext(null);
export const CartContext = createContext(null);

export const LoginContextProvider = ({Children}) => {
        const [login,setLogin] = useState({})
    return(
        <LoginContext.Provider value={{login,setLogin}}>
            {Children}
        </LoginContext.Provider>
    )
}

export const ItemContextProvider = ({children}) =>{
    const [items,setItems] = useState({})
    return (
        <ItemContext.Provider value={{items,setItems}}>
            {children}
        </ItemContext.Provider>
    )
}

export const CartContextProvider = ({children}) =>{
    const [cart,setCart] = useState({})
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}