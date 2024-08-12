
import { ProductPresentation } from "./ProductPresentation"
export const Products = () => {
    const products = [{ id: 1, title: "dress", price: 123 }, { id: 2, title: "t-shirt", price: 183 }];

    return <>
        <ul>

            {products.map((item) => (

                <ProductPresentation key={item.id} item={item}></ProductPresentation>
            ))}
        </ul>
    </>
}