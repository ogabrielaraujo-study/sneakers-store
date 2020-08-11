import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

import { FiCheck } from 'react-icons/fi'

function Success() {
  return (
    <Container>
      <div className="icon-round">
        <FiCheck size={48} color="#fff" />
      </div>

      <h1>Compra realizada com sucessso</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo
        temporibus ex, suscipit voluptates, ab molestiae corporis, deleniti
        quibusdam molestias ipsum cumque rem consequuntur saepe. Voluptatem
        voluptatum ullam ut porro!
      </p>

      <Link to="/">Comprar mais</Link>
    </Container>
  )
}

export default Success
