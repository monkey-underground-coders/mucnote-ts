import React from 'react'
import CategoryItem from '../CategoryItem'
import { Category } from '#/store/types'
import "./index.scss"
const temporaryLocalData = [...new Array(10).keys()].map(k => ({
  title: `Category ${k}`,
  description: 'Default description',
  id: k
}))

const CategoryList = () => {
  const [currentCategory, setCurrentCategory] = React.useState<string>('')
  const categoriesToRender = temporaryLocalData.map(e => (
      <CategoryItem category={e} />
  ))
  return <div className = "categories">{categoriesToRender}</div>
}

export default CategoryList
