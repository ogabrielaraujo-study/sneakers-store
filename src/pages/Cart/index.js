import React from 'react'
import { Link } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import * as CartActions from '../../store/modules/cart/actions'

import { Container, ProductTable, Total } from './styles'
import { FiMinusCircle, FiPlusCircle, FiTrash } from 'react-icons/fi'
import { formatPrice } from '../../util/format'

export default function Cart() {
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount
      }, 0)
    )
  )

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  )

  const dispatch = useDispatch()

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1))
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1))
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <FiMinusCircle size={20} color="#5f73f1" />
                  </button>

                  <input type="number" readOnly value={product.amount} />

                  <button type="button" onClick={() => increment(product)}>
                    <FiPlusCircle size={20} color="#5f73f1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <FiTrash size={20} color="#5f73f1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <Link to="/success">Finalizar pedido</Link>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}
