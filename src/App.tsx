import React, { FC } from 'react'

import './App.less'
import Dashboard from './views/Dashboard'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

enum Routes {
  home = '/home'
}

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
