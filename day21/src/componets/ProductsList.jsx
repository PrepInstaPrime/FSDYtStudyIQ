import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProducts,
  selectAllProducts,
  selectProductsError,
  selectProductsStatus,
  selectCategories,
  makeSelectProductsByCategory,
} from '../slices/productsSlice'
import { addToCart } from '../slices/cartSlice'

export default function ProductsList() {
  const dispatch = useDispatch()
  const status = useSelector(selectProductsStatus)
  const error = useSelector(selectProductsError)
  const categories = useSelector(selectCategories)
  const [category, setCategory] = useState('all')
  const selectProductsByCategory = useMemo(makeSelectProductsByCategory, [])
  const products = useSelector((state) => selectProductsByCategory(state, category))

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts())
  }, [dispatch, status])

  return (
    <div className="section appContainer">
      <div className="productsHeader">
        <h2>Products</h2>
        <label>
          <span style={{ marginRight: 8 }}>Category</span>
          <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p style={{ color: 'crimson' }}>{error}</p>}
      <div className="productsGrid">
        {products.map((p) => (
          <div key={p.id} className="productCard">
            <div className="productImageWrap">
              <img src={p.image} alt={p.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
            </div>
            <h4 className="productTitle">{p.title}</h4>
            <div className="productMeta">
              <span className="price">${p.price}</span>
              <button className="btn btnPrimary" onClick={() => dispatch(addToCart(p))}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


