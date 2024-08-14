import { Product } from "../models/Product";
interface IProductProps {
    item: Product;
    addProduct: (id:number)=> void;

}

export const ProductPresentation = ({ item, addProduct }: IProductProps) => {

    return <>
        <li>{item.title}</li>
        <button onClick={() => addProduct(item.id)} >Lägg till</button>

    </>
}