import React, { useState, useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import * as CartActions from '../../store/modules/cart/actions'

import api from '../../services/api'
import { ProductList } from './styles'
import { FiPlusCircle } from 'react-icons/fi'
import { formatPrice } from '../../util/format'

export default function Home() {
  const [products, setProducts] = useState([])

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount

      return sumAmount
    }, {})
  )

  const dispatch = useDispatch()

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products')

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id))
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <FiPlusCircle size={16} color="#fff" /> {amount[product.id] || 0}
            </div>

            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
