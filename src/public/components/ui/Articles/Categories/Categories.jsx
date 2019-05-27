import React from 'react'
import css from './categories.module.sass'
import Category from './Category/Category'

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      <h2 className="title2">Categories</h2>
      <div className={css.list}>
        {categories.map((category, i) => {
          return <Category content={category.title} link={category.link} key={i} />
        })}
      </div>
    </div>
  )
}

export default Categories
