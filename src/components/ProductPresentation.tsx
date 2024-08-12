import { useContext } from "react";
import { Product } from "../models/Product";
import { CartContext } from "../contexts/CartContexts";

interface IProductProps {
    item: Product;
}

export const ProductPresentation = ({ item }: IProductProps) => {
    const { add } = useContext(CartContext);

    return <>
        <li>{item.title}</li>
        <button onClick={() => add(item.id)} >Lägg till</button>

    </>
}