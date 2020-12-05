import React, { FC } from 'react'
import { Product } from 'api/types'
import { Empty, Space, Typography } from 'antd'
import ProductCard from 'components/ProductCard'
import StyledSpace from 'components/StyledSpace'

const ProductSection: FC<{ title: string; products?: Product[] }> = ({ title, products = [] }) => {
  return (
    <div>
      <Typography.Title>{title}</Typography.Title>

      <StyledSpace>
        {!products?.length && (
          <Empty description={<Typography.Text strong>No products in this section</Typography.Text>} />
        )}
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </StyledSpace>
    </div>
  )
}

export default ProductSection
