import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCount } from '../slices/counterSlice'

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Counter</h2>
        <p style={{margin:'8px 0'}}>Count: {count}</p>
        <div style={{display:'flex',gap:8}}>
          <button className="btn btnPrimary" onClick={() => dispatch(increment())}>Increment</button>
          <button className="btn btnGhost" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}
