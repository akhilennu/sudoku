import { hot } from 'react-hot-loader'
import React from 'react'
import './App.css'
import Example from './components/Example'

const message = 'Welcome to sudoku'
const App = () => (
  <div className='App'>
    <Example />
  </div>
)

export default hot(module)(App)
