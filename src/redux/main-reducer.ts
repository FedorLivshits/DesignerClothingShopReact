import {ProductType} from '../types/types'
import {fetchProducts} from '../api/api'
import {Dispatch} from 'redux'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const ADD_TO_LIKED = 'ADD_TO_LIKED'
const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


let initialState = {
    products: [] as Array<ProductType>,
    product: null as null | ProductType,
    cart: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart') as string) as Array<ProductType>
        : [],
    liked: localStorage.getItem('liked')
        ? JSON.parse(localStorage.getItem('liked') as string) as Array<ProductType>
        : [],
}
type InitialStateType = typeof initialState

const mainReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.products}
        case GET_PRODUCT:
            return {...state, product: action.product}
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, {...action.product, size: action.size, quantity: action.quantity}]}
        case ADD_TO_LIKED:
            return {...state, liked: [...state.liked, {...action.product, size: action.size}]}
        case REMOVE_FROM_LIKED:
            return {...state, liked: state.liked.filter(p => p.id !== action.id)}
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(p => p.id !== action.id)}
        default:
            return state
    }
}
type ActionTypes = GetProductsType & GetProductType

type GetProductsType = {
    type: typeof GET_PRODUCTS
    products: Array<ProductType>
}
type GetProductType = {
    type: typeof GET_PRODUCT
    product: ProductType
}
type AddToCardType = {
    type: typeof ADD_TO_CART
    product: ProductType
}
type AddToLikedType = {
    type: typeof ADD_TO_LIKED
    product: ProductType
}
export const getProducts = (products: Array<ProductType>) => ({type: GET_PRODUCTS, products})
export const getProduct = (product: ProductType) => ({type: GET_PRODUCT, product})
export const addToCart = (product: ProductType,  size: string, quantity: number) => ({type: ADD_TO_CART, product, size, quantity})
export const addToLiked = (product: ProductType, size: string) => ({type: ADD_TO_LIKED, product, size})
export const removeFromLiked = (id: string) => ({type: REMOVE_FROM_LIKED, id})
export const removeFromCart = (id: string) => ({type: REMOVE_FROM_CART, id})



export const setProductsThunk = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        fetchProducts()
            // @ts-ignore
            .then(products => dispatch(getProducts(products)))
    }
}

export default mainReducer