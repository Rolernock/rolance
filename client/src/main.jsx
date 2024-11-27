import React from 'react'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from '../store.jsx'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
