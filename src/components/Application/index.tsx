import React from 'react'
import { Provider } from 'react-redux'
import MainScene from '#/scenes/Main'
import store from '#/store'
import { BrowserRouter } from 'react-router-dom'

const Application = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainScene />
      </BrowserRouter>
    </Provider>
  )
}

export default Application
