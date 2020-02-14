import React from 'react'
import { Category } from './../../../store/types';

interface CategoryItemProps {
  category: Category
}
const CategoryItem = (props: CategoryItemProps) => {
  return <div>
    <div>{props.category.title}</div>
    <div>{props.category.description}</div>
  </div>


}

export default CategoryItem
