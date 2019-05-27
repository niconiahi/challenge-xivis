/** @jsx jsx */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { jsx } from '@emotion/core'
import { styles, detail_page_sizing, cart_page_sizing } from './styles'
import routes from './_.routing'

// Components
import TopBar from 'components/_layouts/Main/TopBar'
import OptionsBar from 'components/_layouts/Main/OptionsBar'

// Pages
import CartPage from 'pages/Main/Cart'
import DetailPage from 'pages/Main/Detail'

const MainLayout = ({ match }) => {
  return (
    <content css={styles}>
      <TopBar />
      {match.url === '/detail' ? null : <OptionsBar />}
      <main css={match.url === '/cart' ? cart_page_sizing : detail_page_sizing}>
        <Switch>
          <Route
            path={match.path}
            render={(_) =>
              match.url === '/' ? (
                <Redirect
                  to={{
                    pathname: '/cart',
                  }}
                />
              ) : (
                routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={(props) => (
                      <route.component {...props} routes={route.routes} />
                    )}
                  />
                ))
              )
            }
          />
        </Switch>
      </main>
    </content>
  )
}

export default MainLayout
