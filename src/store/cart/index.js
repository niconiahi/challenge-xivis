import { createDuck } from 'redux-duck'

/* Duck creation */
const cart = createDuck('cart', 'xivis-challenge')

/* Action types SETER UNSETER */
const DETAIL_PRODUCT_SET = cart.defineType('DETAIL_PRODUCT_SET')
const DETAIL_PRODUCT_UNSET = cart.defineType('DETAIL_PRODUCT_UNSET')
const SEARCH_CRITERIA_SET = cart.defineType('SEARCH_CRITERIA_SET')
const SEARCH_CRITERIA_UNSET = cart.defineType('SEARCH_CRITERIA_UNSET')
const SORTED_BY_SET = cart.defineType('SORTED_BY_SET')
const SORTED_BY_UNSET = cart.defineType('SORTED_BY_UNSET')
const PRODUCT_TO_CART_ADD_SET = cart.defineType('PRODUCT_TO_CART_ADD_SET')
const PRODUCT_TO_CART_ADD_UNSET = cart.defineType('PRODUCT_TO_CART_ADD_UNSET')
const DESCENDING_IS_SET = cart.defineType('DESCENDING_IS_SET')
const DESCENDING_IS_UNSET = cart.defineType('DESCENDING_IS_UNSET')
const GRID_VIEW_IS_SET = cart.defineType('GRID_VIEW_IS_SET')
const GRID_VIEW_IS_UNSET = cart.defineType('GRID_VIEW_IS_UNSET')

/* Action types */
const PRODUCTS_GET = cart.defineType('PRODUCTS_GET')
const PRODUCTS_GET_FULFILLED = cart.defineType('PRODUCTS_GET_FULFILLED')
const PRODUCTS_GET_REJECTED = cart.defineType('PRODUCTS_GET_REJECTED')

/* Action creators */
export const _getProducts = cart.createAction(PRODUCTS_GET)
export const _setDetailProduct = cart.createAction(DETAIL_PRODUCT_SET)
export const _addProductToCart = cart.createAction(PRODUCT_TO_CART_ADD_SET)
export const _setSearchCriteria = cart.createAction(SEARCH_CRITERIA_SET)
export const _setSortedBy = cart.createAction(SORTED_BY_SET)
export const _setIsDescending = cart.createAction(DESCENDING_IS_SET)
export const _setIsGridView = cart.createAction(GRID_VIEW_IS_SET)

/* Initial state */
const initialState = {
  products: [],
  detailProduct: {},
  productsInCart: [],
  criteria: '',
  sortedBy: 'name',
  isDescending: true,
  isGridView: false,
}

/* Reducer */
const reducer = cart.createReducer(
  {
    [PRODUCTS_GET_FULFILLED]: (state, { payload }) => ({
      ...state,
      products: payload.data,
    }),
    [PRODUCTS_GET_REJECTED]: (state) => ({
      ...state,
      products: [],
    }),
    [DETAIL_PRODUCT_SET]: (state, { payload }) => ({
      ...state,
      detailProduct: payload,
    }),
    [DETAIL_PRODUCT_UNSET]: (state) => ({
      ...state,
      detailProduct: {},
    }),
    [PRODUCT_TO_CART_ADD_SET]: (state, { payload }) => ({
      ...state,
      productsInCart: [...state.productsInCart, payload],
    }),
    [PRODUCT_TO_CART_ADD_UNSET]: (state) => ({
      ...state,
      productsInCart: [],
    }),
    [SEARCH_CRITERIA_SET]: (state, { payload }) => ({
      ...state,
      criteria: payload || '',
    }),
    [SEARCH_CRITERIA_UNSET]: (state) => ({
      ...state,
      criteria: '',
    }),
    [SORTED_BY_SET]: (state, { payload }) => ({
      ...state,
      sortedBy: payload,
    }),
    [SORTED_BY_UNSET]: (state) => ({
      ...state,
      sortedBy: true,
    }),
    [DESCENDING_IS_SET]: (state, { payload }) => ({
      ...state,
      isDescending: payload,
    }),
    [DESCENDING_IS_UNSET]: (state) => ({
      ...state,
      isDescending: true,
    }),
    [GRID_VIEW_IS_SET]: (state, { payload }) => ({
      ...state,
      isGridView: payload,
    }),
    [GRID_VIEW_IS_UNSET]: (state) => ({
      ...state,
      isGridView: false,
    }),
  },
  initialState
)

export default reducer
