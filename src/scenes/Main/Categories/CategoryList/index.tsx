import React from 'react'
import CategoryItem from '../CategoryItem'
import { CategoryOptions, StoreRootState, PrimaryKey } from '#/store/types'
import { connect } from 'react-redux'
import './index.scss'

interface CategoryListProps {
  options: CategoryOptions
}

const CategoryList = (props: CategoryListProps) => {
  const renderedCategories = React.useMemo(
    () => Object.keys(props.options).map(categoryId => <CategoryItem category={props.options[categoryId]} />),
    [props.options]
  )

  return (
    <div className="categories">
      <div className="categories__header">
        <h5>Categories</h5>

        <div>
          <input type="text" className="form-control" placeholder="Find categories..." />
        </div>
      </div>

      <div className="categories__postheader">
        <h6>My categories list</h6>

        <div>
          <button className="btn btn-success-borderless">New category</button>
        </div>
      </div>

      <div className="categories__content">{renderedCategories}</div>
    </div>
  )
}

export default connect((store: StoreRootState) => ({ options: store.note.options }))(CategoryList)
