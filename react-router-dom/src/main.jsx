import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login, Dashboard } from './components'
import { BrowserRouter } from 'react-router-dom'
import App from './components/Navigation'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
