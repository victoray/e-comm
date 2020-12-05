import React, { FC } from 'react'
import { useQuery } from 'react-query'
import Api from 'api'
import ProductSection from './ProductSection'
import { Category } from 'api/types'

const CategorySection: FC<{ category: Category }> = ({ category }) => {
  const { data: products } = useQuery(category.alias, () => Api.getCategoryProducts(category.alias))

  return <ProductSection title={category.title} products={products} />
}

export default CategorySection
