import React, {useEffect, useState} from 'react'
import {Link, RouteComponentProps, withRouter} from 'react-router-dom'
import {
    ProductDaysLeft,
    ProductDesigner,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
    ProductSize,
    ProductWrapper,
    IconClose
} from './ProductCardStyle'
import close from '../../assets/img/Close.svg'
import {useDispatch} from 'react-redux'
import {removeFromLiked} from '../../redux/main-reducer'

interface ProductCardType {
    id: string | null
    img: string | null
    name: string | null
    designer: string | null
    price: string | null
    size?: string | null
}

type PropsType = ProductCardType & RouteComponentProps

const ProductCard: React.FC<PropsType> = ({id, img, name, designer, price, location, size}) => {
    const [number, setNumber] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        let rand = 1 - 0.5 + Math.random() * (30)
        setNumber(Math.round(rand))
    }, [])

    const num_word = (value: number) => {
        let words = ['день', 'дня', 'дней']
        value = Math.abs(value) % 100
        let num = value % 10
        if (value > 10 && value < 20) return words[2]
        if (num > 1 && num < 5) return words[1]
        if (num === 1) return words[0]
        return words[2]
    }
    const onCloseBtn = (id: string) => {
        dispatch(removeFromLiked(id))
    }
    return (
        <ProductWrapper>
            {location.pathname === '/liked' && <IconClose src={close} onClick={() => onCloseBtn(id as string)}/>}
            <Link to={`/shop/${id}`}>
                <ProductImage src={img as string}/>
            </Link>
            <ProductInfo>
                <Link to={`/shop/${id}`}>
                    <ProductName>
                        {name!.toUpperCase()}
                    </ProductName>
                </Link>
                <ProductDesigner>
                    {designer}
                </ProductDesigner>
                <ProductDaysLeft>
                    {number} {num_word(number)} до предзаказа
                </ProductDaysLeft>
                {location.pathname === '/liked' && <ProductSize>Выбранный размер: {size}</ProductSize>}
                <ProductPrice>
                    {price} руб.
                </ProductPrice>
            </ProductInfo>
        </ProductWrapper>
    )
}
export default withRouter(ProductCard)
