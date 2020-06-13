import { hot } from 'react-hot-loader'
import React from 'react'
import './App.css'
import Sudoku from './Sudoku/Sudoku'

const message = 'Welcome to sudoku'
const App = () => (
  <div className='App'>
    <Sudoku message={message}/>
    
  </div>
)

export default hot(module)(App)
