// Pages
import CartPage from 'pages/Main/Cart'
import DetailPage from 'pages/Main/Detail'

const routes = [
  {
    path: '/cart',
    component: CartPage,
    exact: true,
  },
  {
    path: '/detail',
    component: DetailPage,
    exact: true,
  },
]

export default routes
