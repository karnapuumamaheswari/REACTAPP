import React, { useState, useMemo, useCallback } from 'react'
import ProductList from './ProductList'

function generateProducts() {
  console.log('Generating large products array')
  return new Array(10000).fill(0).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 1,
  }))
}

export default function App() {
  console.log('App render')

  // Generate products once
  const products = useMemo(() => generateProducts(), [])

  // Expensive total calculation memoized so it only runs when products change
  const total = useMemo(() => {
    console.log('Recomputing total price')
    return products.reduce((sum, p) => sum + p.price, 0)
  }, [products])

  const [count, setCount] = useState(0)
  const [selected, setSelected] = useState(null)

  // Memoize handler so ProductList doesn't receive a new function each render
  const handleSelect = useCallback((product) => {
    setSelected(product)
    console.log('handleSelect called for', product.id)
  }, [])

  return (
    <div className="app">
      <h1>React Performance Demo</h1>

      <div className="top">
        <div className="total">
          <strong>Total price:</strong> ${total}
        </div>

        <div className="counter">
          <button onClick={() => setCount(c => c + 1)}>Increment counter</button>
          <span className="count">Counter: {count}</span>
        </div>
      </div>

      <div className="selected">
        <strong>Selected:</strong> {selected ? `${selected.name} — $${selected.price}` : 'None'}
      </div>

      <ProductList products={products} onSelect={handleSelect} />

      <p className="instructions">
        Open the browser console to observe logs. Clicking "Increment counter" should NOT trigger "Recomputing total price" and should NOT change the `onSelect` reference.
      </p>
    </div>
  )
}
