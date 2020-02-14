import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './index.scss'
import CategoryList from './CategoryList/';

interface CategoriesProps extends RouteComponentProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <div className="content">
      <CategoryList />
    </div>
  )
}

export default Categories
