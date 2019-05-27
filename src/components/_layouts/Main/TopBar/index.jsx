/** @jsx jsx */
import React from 'react'
import Tippy from '@tippy.js/react'
import { jsx } from '@emotion/core'
import { styles, top_bar_icon, tooltip } from './styles'

// Components
import CartTooltipItem from 'components/_lib/CartTooltipItem'

// Material UI
import IconButton from '@material-ui/core/IconButton'

// Material UI Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

// Store
import { connect } from 'react-redux'
import { productsInCartSelector } from 'store/cart/_.selectors'

const TopBar = ({ productsInCart }) => {
  return (
    <div css={[styles]}>
      <h2>e-Commerce</h2>
      <Tippy
        arrow
        css={tooltip}
        trigger='click'
        content={productsInCart.map((x) => (
          <CartTooltipItem product={x} />
        ))}>
        <span>
          <IconButton>
            <ShoppingCartIcon css={[top_bar_icon]} />
          </IconButton>
        </span>
      </Tippy>
    </div>
  )
}

const mapStateToProps = (state) => ({
  productsInCart: productsInCartSelector(state),
})

export default connect(mapStateToProps)(TopBar)
