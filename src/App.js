import React from 'react'
import { Router } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import history from './services/history'

import Header from './components/Header'

// redux
import { Provider } from 'react-redux'
import './config/ReactotronConfig'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />

        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  )
}
