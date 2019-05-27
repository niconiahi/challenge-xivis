import { createSelector } from 'reselect'
import * as R from 'ramda'

export const productsSelector = (state) => state.cart.products
export const detailProductSelector = (state) => state.cart.detailProduct
export const productsInCartSelector = (state) => state.cart.productsInCart
export const criteriaSelector = (state) => state.cart.criteria
export const sortedBySelector = (state) => state.cart.sortedBy
export const isDescendingSelector = (state) => state.cart.isDescending
export const isGridViewSelector = (state) => state.cart.isGridView

export const productsToShowSelector = createSelector(
  [productsSelector, criteriaSelector, sortedBySelector, isDescendingSelector],
  (products, criteria, sortedBy, isDescending) => {
    try {
      return R.pipe(
        R.filter((product) => product.name.toLowerCase().includes(criteria)),
        R.ifElse(
          () => isDescending,
          R.sort(R.descend(R.prop(sortedBy))),
          R.sort(R.ascend(R.prop(sortedBy)))
        )
      )(products)
    } catch (error) {
      console.error('productsToShowSelector', error)
      return null
    }
  }
)
