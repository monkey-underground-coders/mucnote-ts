import React from 'react'
import CategoryItem from '../CategoryItem'
import { CategoryOptions } from '#/store/types'
import "./index.scss"
import { connect } from 'react-redux'
import { StoreRootState } from '../../../../store/types'

interface CategoryListProps {
  options: CategoryOptions
}

const CategoryList = (props: CategoryListProps) => {
  const [currentCategory, setCurrentCategory] = React.useState<string>('')

  const categoriesToRender = React.useMemo(() => Object.keys(props.options).map((categoryId: any) => {
    const categoryInfo = props.options[categoryId]
    return <CategoryItem category={categoryInfo} />
  }), [props.options])

  return <div className="categories">
    {categoriesToRender}
  </div>
}

export default connect((store: StoreRootState) => ({ options: store.note.options }))(CategoryList)
