import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './index.scss'

interface CategoriesProps extends RouteComponentProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <div className="content">
      Category list goes here
    </div>
  )
}

export default Categories
