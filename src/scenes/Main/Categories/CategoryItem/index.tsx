import React from 'react'
import { Category } from '#/store/types'
import "./index.scss"
interface CategoryItemProps {
  category: Category
}

const CategoryItem = (props: CategoryItemProps) => {
  return (
    <div className="category__item">
      <div className="category__item__title">{props.category.title}</div>
      <div className="category__item__description">{props.category.description}</div>
    </div>
  )
}

export default CategoryItem
