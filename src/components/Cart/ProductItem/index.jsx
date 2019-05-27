/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import {
  styles,
  product_image,
  bottom_container,
  image_container,
  price_container,
} from './styles'

// Components
import AddingButton from 'components/_lib/AddingButton'

// Store
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { _setDetailProduct } from 'store/cart'

const ProductItem = ({ product, push, _setDetailProduct }) => {
  const handleClickImg = async () => {
    await _setDetailProduct(product)
    push('/detail')
  }

  return (
    <div css={[styles]}>
      <div css={image_container}>
        <img
          onClick={handleClickImg}
          css={product_image}
          alt={product.name}
          src={product.picture}
        />
      </div>
      <div css={bottom_container}>
        <p>{product.name}</p>
      </div>
      <div css={[bottom_container, price_container]}>
        <p>{product.price}</p>
        <p>{`STOCK: ${product.stock}`}</p>
      </div>
      <div css={bottom_container}>
        <AddingButton product={product} />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  _setDetailProduct: bindActionCreators(_setDetailProduct, dispatch),
})

export default connect(
  null,
  mapDispatchToProps
)(ProductItem)
