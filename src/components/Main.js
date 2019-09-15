import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import { Link } from 'react-router-dom'

function Main () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Impariamo il metodo di ricerca</p>
        <Link to='/searchit'>
          <div className='App-link' target='_blank' rel='noopener noreferrer'>
            Search It
          </div>
        </Link>
      </header>
    </div>
  )
}

export default Main
