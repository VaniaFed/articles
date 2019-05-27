import React from 'react'
import css from './nav.module.sass'

const Nav = () => {
  return (
    <nav className={css.nav}>
      <li className={css.item}><a href="#" className={css.link}>Articles list</a></li>
      <li className={css.item}><a href="#" className={css.link}>Create new article</a></li>
    </nav>
  )
}

export default Nav
