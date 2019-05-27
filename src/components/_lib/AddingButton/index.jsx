/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { styles, product_image, bottom_container } from './styles'

// Store
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { _addProductToCart } from 'store/cart'

const AddingButton = ({ product, _addProductToCart }) => {
  const [quantity, setQuantity] = useState(0)

  const handleAddProduct = () => {
    if (product.stock < quantity) {
      console.error(`We only have products ${product.stock} in stock`)
    }
    _addProductToCart(product)
  }

  return (
    <div css={[styles]}>
      <input
        onChange={(e) => setQuantity(Math.round(e.target.value))}
        placeholder='0'
        type='number'
      />
      <button disabled={product.stock < quantity} onClick={handleAddProduct}>
        <span>{product.stock < quantity ? 'No stock' : 'Agregar'}</span>
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  _addProductToCart: bindActionCreators(_addProductToCart, dispatch),
})

export default connect(
  null,
  mapDispatchToProps
)(AddingButton)
