import React from 'react'
import Counter from './componets/Counter'
import ProductsList from './componets/ProductsList'
import Cart from './componets/Cart'
export default function App() {
  return (
    <div className="appContainer">
      <div className="section">
        <Counter/>
      </div>
      <div className="section">
        <ProductsList/>
      </div>
      <div className="section">
        <Cart/>
      </div>
    </div>
  )
}
