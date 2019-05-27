import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { css } from '@emotion/core'
import './App.css'

// Components
import MainLayout from 'layouts/Main'

const App = () => (
  <div>
    <Switch>
      <Route path='*' component={MainLayout} />
    </Switch>
  </div>
)
export default App
