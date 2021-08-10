import {ProductType} from '../types/types'
import {fetchProduct, fetchProducts} from '../api/api'
import {Dispatch} from 'redux'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const ADD_TO_LIKED = 'ADD_TO_LIKED'


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
            return {...state, cart: [...state.cart, action.product]}
        case ADD_TO_LIKED:
            return {...state, liked: [...state.liked, {...action.product, size: action.size}]}
        default:
            return state
    }
}
type ActionTypes = GetProductsType | GetProductType

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
export const addToCart = (product: ProductType) => ({type: ADD_TO_CART, product})
export const addToLiked = (product: ProductType, size: string) => ({type: ADD_TO_LIKED, product, size})



export const setProductsThunk = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        fetchProducts()
            // @ts-ignore
            .then(products => dispatch(getProducts(products)))
    }
}
// export const setProductThunk = (id: string) => {
//     debugger
//     return (dispatch: Dispatch<ActionTypes>) => {
//         fetchProduct(id)
//             // @ts-ignore
//             .then(product => dispatch(getProduct(product)))
//     }
// }

export default mainReducer