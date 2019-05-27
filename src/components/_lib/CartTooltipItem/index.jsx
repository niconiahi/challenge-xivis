/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

const CartTooltipItem = ({ product }) => {
  return (
    <div css={[styles]}>
      <h3>{product.name}</h3> <h4>{product.price}</h4>
    </div>
  )
}

export default CartTooltipItem
