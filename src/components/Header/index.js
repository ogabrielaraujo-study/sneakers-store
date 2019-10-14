import React from 'react'
import { connect } from 'react-redux'

import { Container, Cart, Logo } from './styles'

import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'

function Header({ cartSize }) {
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header)
