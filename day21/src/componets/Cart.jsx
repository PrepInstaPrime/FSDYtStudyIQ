import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQty, incrementQty, removeFromCart, selectCartItemsArray, selectCartTotalPrice, selectCartTotalQty, clearCart } from '../slices/cartSlice'

export default function Cart() {
  const items = useSelector(selectCartItemsArray)
  const totalQty = useSelector(selectCartTotalQty)
  const totalPrice = useSelector(selectCartTotalPrice)
  const dispatch = useDispatch()

  if (items.length === 0) {
    return (
      <div className="section appContainer">
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div className="section appContainer">
      <h2>Cart</h2>
      <table className="cartTable">
        <thead>
          <tr>
            <th>Item</th>
            <th style={{ textAlign: 'right' }}>Price</th>
            <th style={{ textAlign: 'center' }}>Qty</th>
            <th style={{ textAlign: 'right' }}>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td style={{ textAlign: 'right' }}>${product.price}</td>
              <td style={{ textAlign: 'center' }}>
                <button className="qtyBtn" onClick={() => dispatch(decrementQty(product.id))}>-</button>
                <span style={{ margin: '0 8px' }}>{quantity}</span>
                <button className="qtyBtn" onClick={() => dispatch(incrementQty(product.id))}>+</button>
              </td>
              <td style={{ textAlign: 'right' }}>${(product.price * quantity).toFixed(2)}</td>
              <td style={{ textAlign: 'center' }}>
                <button className="btn btnGhost" onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td><button className="btn btnGhost" onClick={() => dispatch(clearCart())}>Clear cart</button></td>
            <td></td>
            <td style={{ textAlign: 'center' }}>{totalQty}</td>
            <td style={{ textAlign: 'right' }}>${totalPrice.toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}


