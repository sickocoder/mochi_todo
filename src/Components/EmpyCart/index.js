import React from 'react'

import EmpyCartImage from '../../Assets/empty_cart.png'

import { Container } from './styles'

export default function EmpyCart() {
  return (
    <Container>
      <img src={EmpyCartImage} alt="empy cart" />
      <h1>Carrinho Vazio (-_-)</h1>
    </Container>
  )
}
