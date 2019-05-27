import React from 'react'
import Nav from './Nav'
import css from './header.module.sass'

const Header = () => {
  return (
    <div className={`${css.header} container`}>
      <h1 className="logo">Logo</h1>
      <Nav />
    </div>
  )
}

export default Header
