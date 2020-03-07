import React, { useState, useEffect, useRef, useMemo } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  addCart,
  removeCart,
  updateCart,
  getCarts,
  clearCart
} from '../../Store/actions'

import { Container } from './styles'
import CartItem from '../../Components/CartItem'
import EmpyCart from '../../Components/EmpyCart'

import MochiStoreLogo from '../../Assets/MochiStore.png'

export default function Home() {
  const [selectedCartItem, setSelectedCartItem] = useState(null)

  const productNameRef = useRef(null)
  const priceRef = useRef(null)
  const quantityRef = useRef(null)

  const data = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      await fetch('http://localhost:3333/products')
        .then(resp => resp.json())
        .then(data => {
          dispatch(getCarts(data))
        })
    })()
  }, [dispatch])

  const productCount = useMemo(() => {
    let total = 0
    data.forEach(
      item => (total += parseInt(item.price) * parseInt(item.quantity))
    )
    return total
  }, [data])

  return (
    <Container>
      <img src={MochiStoreLogo} alt="app logo" />
      <div className="middleSection">
        <form onSubmit={handleSubmit}>
          <input
            ref={productNameRef}
            type="text"
            id="todoContent"
            placeholder="Nome do produto"
          />
          <div className="inline">
            <input
              ref={quantityRef}
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Quantidade"
            />
            <input
              ref={priceRef}
              type="number"
              id="price"
              name="price"
              placeholder="Preço"
            />
          </div>
          <button
            className="btnClearAll"
            type="submit"
            style={{ width: '100%' }}
          >
            GUARDAR NO CARRINHO
          </button>
        </form>

        {data.length > 0 ? (
          <ul>
            {data.map(item => (
              <div
                key={item.id + item.name}
                className={item === selectedCartItem ? 'selected' : ''}
              >
                <CartItem
                  onDeletePress={handleRemove}
                  onEditPress={handleUpdate}
                  data={item}
                />
              </div>
            ))}
          </ul>
        ) : (
          <EmpyCart />
        )}

        {data.length > 0 ? (
          <div className="bottomSection">
            <span>
              {data.length} íte{data.length > 1 ? 'ns' : 'm'}
              <br />
              Total: {productCount}kz
            </span>
            <button className="btnClearAll" onClick={handleClearAll}>
              LIMPAR TUDO
            </button>
          </div>
        ) : (
          <span />
        )}
      </div>
    </Container>
  )

  function handleSubmit(event) {
    event.preventDefault()

    const name = productNameRef.current.value
    const price = priceRef.current.value
    const quantity = quantityRef.current.value

    if (name === '' || price === '' || quantity === '') {
      alert('Por favor preencha todos os campos!')
      return
    }

    if (selectedCartItem === null) {
      let id = 1
      if (data.length > 0) {
        id = id + data[data.length - 1].id
      }

      dispatch(
        addCart({
          id,
          name,
          price,
          quantity
        })
      )
    } else {
      dispatch(
        updateCart({
          id: selectedCartItem.id,
          name,
          price,
          quantity
        })
      )
      setSelectedCartItem(null)
    }

    productNameRef.current.value = ''
    quantityRef.current.value = ''
    priceRef.current.value = ''
  }

  function handleRemove(id) {
    dispatch(removeCart({ id }))
  }

  function handleUpdate(id) {
    const product = data.find(item => item.id === id)
    setSelectedCartItem(product)

    productNameRef.current.value = product.name
    priceRef.current.value = product.price
    quantityRef.current.value = product.quantity
  }

  function handleClearAll() {
    dispatch(clearCart(data))
  }
}
