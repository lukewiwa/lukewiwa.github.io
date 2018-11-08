import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Nav from './components/Nav'

import './app.css'

const App = () => (
  <Router>
    <div>
      <Nav
        title="Wiwa"
        headings={[
          { link: 'blog', title: 'Blog' },
          { link: 'gymnastics', title: 'Gymnastics' },
        ]}
      />
      <div className="flex-center">
        <div className="container">
          <Routes />
        </div>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
