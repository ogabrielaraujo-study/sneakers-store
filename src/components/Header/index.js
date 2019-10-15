import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Cart, Logo } from './styles'

import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'

export default function Header() {
  const cartSize = useSelector(state => state.cart.length)

  return (
    <Container>
      <Logo to="/">
        <FiShoppingBag size={40} color="#fff" />
        <h1>React Store</h1>
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <FiShoppingCart size={36} color="#fff" />
      </Cart>
    </Container>
  )
}
