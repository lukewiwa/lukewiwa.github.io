import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Wiwa</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="flex-center">
        <div className="container">
          <Routes />
        </div>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
