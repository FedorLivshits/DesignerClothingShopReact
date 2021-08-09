import {ProductType} from '../types/types'
import {fetchProduct, fetchProducts} from '../api/api'
import {Dispatch} from 'redux'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'


let initialState = {
    products: [] as Array<ProductType>,
    product: null as null | ProductType,
}
type InitialStateType = typeof initialState

const mainReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.products}
        case GET_PRODUCT:
            return {...state, product: action.product}
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
export const getProducts = (products: Array<ProductType>) => ({type: GET_PRODUCTS, products})
export const getProduct = (product: ProductType) => ({type: GET_PRODUCT, product})


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