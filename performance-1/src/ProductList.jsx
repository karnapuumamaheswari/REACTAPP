import React, { useRef, useEffect } from 'react'

export default function ProductList({ products, onSelect }) {
  const prevOnSelect = useRef(onSelect)
  useEffect(() => {
    const changed = prevOnSelect.current !== onSelect
    console.log('ProductList: onSelect reference changed?', changed)
    prevOnSelect.current = onSelect
  }, [onSelect])

  console.log('ProductList render')

  return (
    <div className="product-list">
      <h3>Products ({products.length})</h3>
      <ul>
        {products.slice(0, 20).map(p => (
          <li key={p.id}>
            {p.name} — ${p.price} <button onClick={() => onSelect(p)}>Select</button>
          </li>
        ))}
      </ul>
      <p className="notice">(Showing first 20 products for brevity)</p>
    </div>
  )
}
