export interface ProductType {
    'id': string | null
    'photo': string | null
    'product-name': string | null
    'product-designer': string | null
    'about-product': string | null
    'price': string | null
    size?: string
    quantity?: number
}

export interface ProductCardType {
    id: string | null
    img: string | null
    name: string | null
    designer: string | null
    price: string | null
    size?: string
    quantity?: number
}
