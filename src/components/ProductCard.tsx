import React, { FC } from 'react'
import { Product } from '../api/types'
import { Button, Card } from 'antd'
import styled from 'styled-components/macro'
import { EditOutlined, EllipsisOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const StyledImage = styled.img`
  width: 250px;
  height: 200px;
`

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <Card
      hoverable
      style={{ width: 250 }}
      cover={<StyledImage alt="example" src={product.image} />}
      actions={[
        <Button icon={<ShoppingCartOutlined />} key={'shopping'} type={'primary'}>
          Add to cart
        </Button>
      ]}
    >
      <Card.Meta title={product.title} />
    </Card>
  )
}

export default ProductCard
