import React from 'react'
import CategoryItem from '../CategoryItem'
import { Category } from '#/store/types'

const temporaryLocalData = [...new Array(10).keys()].map(k => ({
  title: `Category ${k}`,
  description: 'Default description',
  id: k
}))

const CategoryList = () => {
  const [currentCategory, setCurrentCategory] = React.useState<string>('')
  const categoriesToRender = temporaryLocalData.map(e => (
    <div>
      <CategoryItem category={e} />{' '}
    </div>
  ))
  return <div></div>
}

export default CategoryList
