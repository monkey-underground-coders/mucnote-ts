import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import CategoryList from './CategoryList/'
import AnimatedPageTransition from '#/components/AnimatedPageTransition'
import './index.scss'

interface CategoriesProps extends RouteComponentProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <AnimatedPageTransition>
      <div className="categories-content">
        <CategoryList />
      </div>
    </AnimatedPageTransition>
  )
}

export default Categories
