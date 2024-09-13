import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import items from './pages/Reducer.jsx'

let cartStore=configureStore({
  reducer:items
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={cartStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
