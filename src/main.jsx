import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import smoothscroll from 'smoothscroll-polyfill'
import { Analytics } from "@vercel/analytics/react"

smoothscroll.polyfill();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
)
