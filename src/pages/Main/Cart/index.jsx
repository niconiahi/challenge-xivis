/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx } from '@emotion/core'
import { styles, grid_view_styles } from './styles'

// Components
import ProductItem from 'components/Cart/ProductItem'

// Store
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { productsToShowSelector, isGridViewSelector } from 'store/cart/_.selectors'
import { getProducts } from 'store/cart/_.services'
import { _getProducts, _setDetailProduct } from 'store/cart'

const CartPage = ({
  match,
  products,
  _getProducts,
  push,
  productsToShow,
  isGridView,
}) => {
  useEffect(() => {
    try {
      async function fetchData() {
        const res = await getProducts()
        await _getProducts(Promise.resolve(res))
      }
      fetchData()
    } catch (err) {
      console.error('getProducts ERROR', err)
      _getProducts(Promise.reject(err))
    }
  }, [])

  return (
    <div css={!isGridView ? styles : grid_view_styles}>
      {productsToShow &&
        productsToShow.map((product) => <ProductItem product={product} push={push} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  productsToShow: productsToShowSelector(state),
  isGridView: isGridViewSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  push: bindActionCreators(push, dispatch),
  _getProducts: bindActionCreators(_getProducts, dispatch),
  _setDetailProduct: bindActionCreators(_setDetailProduct, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage)
