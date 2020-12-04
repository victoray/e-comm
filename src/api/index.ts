import axios from 'axios'

type Category = {
  title: string
  alias: string
}

const axiosInstance = axios.create({
  baseURL: 'https://euas.person.ee',
  headers: {
    Authorization: 'Bearer viktoray007@gmail.com'
  }
})

axiosInstance.interceptors.response.use((response) => response.data)

class Api {
  static getCategories(): Promise<Array<Category>> {
    return axiosInstance.get('/categories')
  }

  static getCategoryProducts(alias: string): Promise<Array<Category>> {
    return axiosInstance.get(`/categories/${alias}/products`)
  }

  static getProduct(productId: string): Promise<Array<Category>> {
    return axiosInstance.get(`/products/${productId}`)
  }

  static getProducts(): Promise<Array<Category>> {
    return axiosInstance.get('/products/')
  }

  static getProductsByTag(sectionName: string): Promise<Array<Category>> {
    return axiosInstance.get(`/sections/${sectionName}/products`)
  }

  // CART

  static createCart(data = {}): Promise<Array<Category>> {
    return axiosInstance.post('/user/carts', data)
  }

  static updateCart(cartId: string, data = {}): Promise<Array<Category>> {
    return axiosInstance.put(`/user/carts/${cartId}`, data)
  }

  static getCart(cartId: string): Promise<Array<Category>> {
    return axiosInstance.get(`/user/carts/${cartId}`)
  }

  // ORDER

  static createOrder(cartId: string, data = {}): Promise<Array<Category>> {
    return axiosInstance.post(`/user/carts/${cartId}/orders`, data)
  }

  static getOrders(): Promise<Array<Category>> {
    return axiosInstance.get(`/user/orders`)
  }

  static getOrder(orderId: string): Promise<Array<Category>> {
    return axiosInstance.get(`/user/orders/${orderId}`)
  }
}

export default Api
