import React from 'react'
import { Category } from '#/store/types'
import { connect } from 'react-redux'
import { setSelectedCategory } from '#/store/actions/note'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import './index.scss'

interface CategoryItemProps extends RouteComponentProps {
  category: Category
  setSelectedCategory: (payload: { selectCategory: Category }) => void
}

const CategoryItem = (props: CategoryItemProps) => {
  const onCategoryClick = () => {
    props.setSelectedCategory({ selectCategory: props.category })
    props.history.push('/cabinet')
  }

  return (
    <div onClick={onCategoryClick} className="category__item">
      <div className="category__item__title">{props.category.title}</div>
      <div className="category__item__description">{props.category.description}</div>
    </div>
  )
}

export default withRouter(connect(null, { setSelectedCategory })(CategoryItem))
