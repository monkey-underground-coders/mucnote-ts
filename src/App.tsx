import React from 'react'
import logo from './logo.svg'
import './App.css'
import MainScene from './scenes/Main'
import { Provider } from 'react-redux'
import store from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainScene />
    </Provider>
  )
}

export default App
