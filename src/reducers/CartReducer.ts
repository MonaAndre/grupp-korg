import { products } from "../App";
import { CartItem } from "../models/CartItem";

interface IAction {
    type: ActionType;
    payload: string;
}
export enum ActionType {
    ADDED,
    REMOVED,
    DECREASED,
}

export const CartReducer = (cart: CartItem[], action: IAction): CartItem[] => {

    
    if (action.type === ActionType.ADDED) {
        const product = cart.find(p => p.product.id === +action.payload);
        if (!product) {
            const foundProduct = products.find(p => p.id === +action.payload)
            const updatedCart = [...cart, new CartItem(foundProduct!, 1)]
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            return updatedCart

        } else {
           const updatedCart = cart.map((ci) => {
                if (ci.product.id === +action.payload) {
                     return { ...ci, amount: ci.amount + 1 }
                    }
                    else {
                        return ci;
                    }
                });
                localStorage.setItem("cart", JSON.stringify(updatedCart))
                return updatedCart
        }
    }

    if (action.type === ActionType.REMOVED) {
        const updatedCart = cart.filter(item => item.product.id !== +action.payload);
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        return updatedCart

    }
    return cart
}