import {ProductType} from '../types/types'

const GET_PRODUCTS = 'GET_PRODUCTS'
const IS_LOADING = 'IS_LOADING'

let initialState = {
    products: [] as Array<ProductType>,
    isLoading: false,
}
type InitialStateType = typeof initialState

const mainReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.products}
        default:
            return state
    }
}
type ActionTypes = GetProductsType

type GetProductsType = {
    type: typeof GET_PRODUCTS
    products: Array<ProductType>
}
export const getProducts = (products: Array<ProductType>) => ({type: GET_PRODUCTS, products})

export default mainReducer