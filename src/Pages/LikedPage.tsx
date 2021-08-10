import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {AppStateType} from '../redux/store'
import ProductCard from '../Components/ProductCard/ProductCard'
import {Container} from '../GlobalStyle'
import {ProductsListWrapper} from '../Components/forShopPage/ProductsList/ProductsList'
import styled from 'styled-components'
import likeIcon from '../assets/img/like.svg'
import { Link } from 'react-router-dom'

export const LikedPageWrapper = styled.div`
  min-height: 100vh;
`
export const Title = styled.div`
  font-size: 18px;
  padding-top: 120px;
  color: black;
`
export const NoProductWrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`
export const LikedIcon = styled.img`
  border: 1px solid #a4a4a4;
  border-radius: 50%;
  width: 41px;
  padding: 9px;
`
export const TextWrapper = styled.div`
  padding: 10px 0 20px 0;
 
`
export const Text = styled.p`
text-align: center;
  font-size: 12px;
  line-height: 18px;
  color: black;
`
export const Button = styled(Link)`
    background: black;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
`

const LikedPage = () => {
    const likedProducts = useSelector((state: AppStateType) => state.mainReducer.liked)
    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(likedProducts))
    }, [likedProducts])

    return (
        <Container>
            <LikedPageWrapper>
            <Title>
                Избранное
            </Title>
            {likedProducts.length
                ?
                <ProductsListWrapper>
                    {likedProducts.map(p => <ProductCard key={p.id} img={p.photo} designer={p['product-designer']}
                                                         id={p.id} name={p['product-name']} price={p.price}/>)}
                </ProductsListWrapper>
                :
                <>
                    <NoProductWrapper>
                        <LikedIcon src={likeIcon}/>
                        <TextWrapper>
                            <Text>
                                Здесь будут сохраняться товары, добавленные в избранное.
                            </Text>
                            <Text>
                                Мы отправим вам напоминание, когда количество товара будет подходить к концу :)
                            </Text>
                        </TextWrapper>
                        <Button to='/shop'>
                          Перейти в магазин
                        </Button>
                    </NoProductWrapper>
                </>
            }
            </LikedPageWrapper>
        </Container>
    )
}

export default LikedPage
