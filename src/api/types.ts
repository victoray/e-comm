export type Category = {
  title: string
  alias: string
}

export type ProductOption = {
  code: string
  title: string
  image: string
  price: number
  priceDiscounted: number
  qty: number
}

export type Product = {
  id: number
  title: string
  image: string
  description: string
  categories: string[]
  sections: string[]
  options: ProductOption[]
}
