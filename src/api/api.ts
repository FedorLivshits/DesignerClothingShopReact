import {ProductType} from '../types/types'

export const fetchProducts = () => {
    return fetch('data.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data)
        .catch((e) => alert('error: ' + e))
}
export const fetchProductsByPage = (page: string) => {
    return fetch('data.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.filter((item: ProductType) => item['page'] === page))
        .catch((e) => alert('error: ' + e))
}
export const fetchProduct = (id: string) => {
    return fetch('data.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data.filter((item: ProductType) => item.id === id))
        .catch((e) => alert('error: ' + e))
}