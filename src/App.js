import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'

import Header from './components/Header'

// redux
import { Provider } from 'react-redux'
import './config/ReactotronConfig'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />

        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  )
}
