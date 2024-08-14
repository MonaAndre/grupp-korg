import { useReducer } from 'react';
import './App.css';
import Cart from './components/Cart';
import { Products } from './components/Products';
import { ActionType, CartReducer } from './reducers/CartReducer';

export const products = [{ id: 1, title: "dress", price: 123 }, { id: 2, title: "t-shirt", price: 183 }];


function App() {
  const [cart, dispatch] = useReducer(CartReducer, []);
  console.log(cart);
  
  const handleAdd = (id: number) => {
    dispatch({
      type: ActionType.ADDED,
      payload: id.toString(),
    })
  }
  const handleRemove = (id:number) =>{
    dispatch({
      type: ActionType.REMOVED,
      payload: id.toString()
    })
  }






  // const [cart, setCart] = useState<ICartContext>({
  //   cartProducts: [],
  //   add: () => { },
  //   remove: () => { }
  // })

  // cart.add = (id: number) => {
  //   const p = cart.cartProducts.find(p => p.product.id === id)
  //   if (!p) {
  //     const foundProduct = products.find(p => p.id === id)
  //     if (foundProduct) {
  //       const updatedCart = { ...cart, cartProducts: [...cart.cartProducts, new CartItem(foundProduct, 1)] }
  //       setCart(updatedCart)
  //       localStorage.setItem("cart", JSON.stringify(updatedCart))
  //     }
  //   } else {

  //     const updatedCartItems: CartItem[] = cart.cartProducts.map(ci => {
  //       if (ci.product.id === id) {
  //         return { ...ci, amount: ci.amount + 1 }
  //       }
  //       else {
  //         return ci;
  //       }

  //     }

  //     )
  //     setCart({ ...cart, cartProducts: updatedCartItems });
  //     localStorage.setItem("cart", JSON.stringify(updatedCartItems))

  //   }


  return (
    <>



      <Products addProduct={handleAdd}>

      </Products>

      <Cart handleRemove={handleRemove}></Cart>




    </>
  )
}

export default App
