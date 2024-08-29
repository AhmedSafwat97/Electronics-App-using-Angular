export interface Product {
  _id: string
  Name: string
  images: string[]
  Description: string
  category: Category
  brand: Brand
  price: number
  PriceBeforeDiscount: number
  Reviews: number
  Rating: number
  bestseller: boolean
  HasDiscount: boolean
  discount: number
  createdAt: string
  updatedAt: string
  slug: string
  __v: number
  IsFav: boolean
}

export interface Category {
  Name: string
}

export interface Brand {
  Name: string
}
