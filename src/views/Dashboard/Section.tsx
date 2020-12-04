import React, { FC } from 'react'
import { useQuery } from 'react-query'
import Api from 'api'
import { Row, Space, Typography } from 'antd'
import ProductCard from 'components/ProductCard'

const Section: FC<{ title: string; tag: string }> = ({ title, tag }) => {
  const { data: products } = useQuery(tag, () => Api.getProductsByTag(tag))
  return (
    <div>
      <Typography.Title>{title}</Typography.Title>

      <Row>
        <Space>
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Space>
      </Row>
    </div>
  )
}

export default Section
