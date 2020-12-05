import React, { FC } from 'react'
import { useQuery } from 'react-query'
import Api from 'api'
import ProductSection from './ProductSection'

const Section: FC<{ title: string; tag: string }> = ({ title, tag }) => {
  const { data: products } = useQuery(tag, () => Api.getProductsByTag(tag))
  return <ProductSection title={title} products={products} />
}

export default Section
