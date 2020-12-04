import React, { FC } from 'react'
import { useQuery } from 'react-query'
import Api from 'api'

const Section: FC<{ title: string; tag: string }> = ({ title, tag }) => {
  const { data: products } = useQuery(tag, () => Api.getProductsByTag(tag))
  return <div>{title}</div>
}

export default Section
