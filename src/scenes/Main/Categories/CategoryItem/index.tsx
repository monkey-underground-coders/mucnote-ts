import React from 'react'
import { Category } from '#/store/types'
import "./index.scss"
import { connect } from 'react-redux'
import { StoreRootState } from '../../../../store/types'
import { setSelectedCategory } from '#/store/actions/note'

interface CategoryItemProps {
  category: Category
  setSelectedCategory: (payload: { selectCategory: Category }) => void
}

const CategoryItem = (props: CategoryItemProps) => {
  const onCategoryClick = () => {
    props.setSelectedCategory({ selectCategory: props.category })
  }

  return (
    <div onClick={onCategoryClick} className="btn category__item">
      <div className="category__item__title">{props.category.title}</div>
      <div className="category__item__description">{props.category.description}</div>
    </div>
  )
}

export default connect(null, ({ setSelectedCategory }))(CategoryItem)
