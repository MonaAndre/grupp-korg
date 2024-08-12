import { useState } from 'react';
import './App.css';
import { Products } from './components/Products';
import Cart from './components/Cart';
import { CartItem } from './models/CartItem';
import { CartContext, ICartContext } from './contexts/CartContexts';

function App() {
  const [cart, setCart] = useState<ICartContext>({
    cartProducts: [],
    add: () => { },
    remove: () => { }
  })
  const products = [{ id: 1, title: "dress", price: 123 }, { id: 2, title: "t-shirt", price: 183 }];

  cart.add = (id: number) => {
    const p = cart.cartProducts.find(p => p.product.id === id)
    if (!p) {
      const foundProduct = products.find(p => p.id === id)
      if (foundProduct) {
        const updatedCart = { ...cart, cartProducts: [...cart.cartProducts, new CartItem(foundProduct, 1)] }
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
      }
    } else {

      const updatedCartItems: CartItem[] = cart.cartProducts.map(ci => {
        if (ci.product.id === id) {
          return { ...ci, amount: ci.amount + 1 }
        }
        else {
          return ci;
        }

      }

      )
      setCart({ ...cart, cartProducts: updatedCartItems });
      localStorage.setItem("cart", JSON.stringify(updatedCartItems))

    }

  }
  return (
    <>

      <CartContext.Provider value={cart}>

        <Products>

        </Products>

        <Cart></Cart>

      </CartContext.Provider>


    </>
  )
}

export default App
