import React from 'react'
import Categories from './Categories/Categories'
// import css from './articles.module.sass'

const Articles = () => {
  const categories = [
    {
      title: 'Vue',
      link: '/vue'
    },
    {
      title: 'React',
      link: '/react'
    },
    {
      title: 'Angular',
      link: '/angular'
    },
    {
      title: 'Node.js',
      link: '/nodejs'
    }
  ]
  return (
    <div className="container">
      <Categories categories={categories} />
      <h1 className="title2">Popular</h1>
    </div>
  )
}

export default Articles
