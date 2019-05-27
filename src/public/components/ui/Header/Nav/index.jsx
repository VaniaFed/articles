import React from 'react'
import css from './nav.module.sass'

const Nav = () => {
  return (
    <nav className={css.nav}>
      <li className={css.item}><a href="#">Main</a></li>
      <li className={css.item}><a href="#">Profile</a>Profile</li>
      <li className={css.item}><a href="#">About</a></li>
    </nav>
  )
}

export default Nav
