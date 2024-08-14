import { CartItem } from "../models/CartItem";

interface ICartProps {
  handleRemove: (id:number)=> void;
}

export const Cart = ({ handleRemove }: ICartProps) => {
const cartItems: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]")
  return <>
  <h2>Varukorg</h2>
      {cartItems.map((item) => (
        <li key={item.product.id}>
          {item.product.title}
          {item.amount}
          <button onClick={()=>handleRemove(item.product.id)}>Ta bort</button>
        </li>

      ))}
  </>

}

export default Cart