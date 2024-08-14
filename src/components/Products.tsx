
import { ProductPresentation } from "./ProductPresentation"
interface IProductProps{
    addProduct: (id:number)=> void;
}

export const Products = ({addProduct}:IProductProps) => {
    const products = [{ id: 1, title: "dress", price: 123 }, { id: 2, title: "t-shirt", price: 183 }];

    return <>
        <ul>

            {products.map((item) => (

                <ProductPresentation key={item.id} item={item} addProduct={addProduct} ></ProductPresentation>
            ))}
        </ul>
    </>
}