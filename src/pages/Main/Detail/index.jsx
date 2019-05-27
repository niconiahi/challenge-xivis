/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx } from '@emotion/core'
import { styles, img_container, price_container, information_container } from './styles'

// Components
import ProductItem from 'components/Cart/ProductItem'
import AddingButton from 'components/_lib/AddingButton'

// Store
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { detailProductSelector } from 'store/cart/_.selectors'

const DetailPage = ({ match, detailProduct, push }) => {
  return (
    <div css={styles}>
      <div css={img_container}>
        <img src='https://via.placeholder.com/300' />
      </div>
      <div css={information_container}>
        <div>
          <h2>{detailProduct.name}</h2>
          <div css={price_container}>
            <h4>{detailProduct.price}</h4>
            <h5>{`STOCK: ${detailProduct.stock}`}</h5>
          </div>
          <p>{detailProduct.description}</p>
        </div>
        <div>
          <AddingButton product={detailProduct} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  detailProduct: detailProductSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  push: bindActionCreators(push, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage)
