import React from 'react'
import css from './category.module.sass'

const Category = ({ content, link }) => {
  return (
    <li className={css.item}>
      <a href={link} className={css.link}>{content}</a>
    </li>
  )
}

export default Category
