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
import { push } from 'connected-react-router'
import { productsInCartSelector } from 'store/cart/_.selectors'
import { bindActionCreators } from 'redux'

const TopBar = ({ push }) => {
  return (
    <div css={[styles]}>
      <button onClick={() => push('/cart')}>
        <span>Go back to Store</span>
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  push: bindActionCreators(push, dispatch),
})

export default connect(
  null,
  mapDispatchToProps
)(TopBar)
