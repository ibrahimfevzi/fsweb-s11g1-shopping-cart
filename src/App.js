import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { cartContext } from "./contexts/CartContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = React.useState(data);
  const [cart, setCart] = React.useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    const newCart = [...cart, item];
    setCart(newCart);
  };

  const removeItem = (id) => {
    // verilen id'ye sahip öğeyi sepetten kaldır
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <cartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation />

          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </cartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
