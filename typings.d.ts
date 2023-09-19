export type Product = {
  id: number
  title: string
  description: string
}

export type ProductResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export type Todo = {
  id: string
  userId: string
  title: string
  completed: boolean
}
