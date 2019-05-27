import React from 'react'
import Nav from './Nav'
import css from './header.module.sass'

const Header = () => {
  return (
    <div className={`${css.header} container`}>
      <h1 className={css.logo}>Articles words</h1>
      <Nav />
    </div>
  )
}

// const article = {
//   id: 1,
//   title: 'Some title',
//   category: ['koa', 'nodejs']
// }

export default Header
