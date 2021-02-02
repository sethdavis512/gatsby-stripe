import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

import Button from './Button'

import useCart from '../hooks/useCart'
import { getUniqueId } from '../utils'

const ProductCard = styled.div`
    flex: 0 0 48%;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    margin-left: 1%;
    margin-bottom: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};

    :hover {
        background-color: ${({ theme }) => theme.hover};
    }

    @media (min-width: 768px) {
        flex: 0 0 31%;
        margin-left: 1rem;
        margin-bottom: 1rem;
    }
`

const ProductCardContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`

const ProductCardLink = styled(Link)`
    width: 100%;
    padding: 1rem 1rem 0 1rem;
`

const ProductCardTitle = styled.p`
    font-size: 1rem;
    padding: 0;
    margin: 0 0 1rem;
`

const CardButton = styled(Button)`
    margin: 0 1rem 1rem;
`

const ProductCards = ({ products }) => {
    const [, cartActions] = useCart()

    const createAddToCart = product => () => {
        cartActions.addToCart(product, 1)
    }

    return products.map(product => (
        <ProductCard key={getUniqueId('product-card')}>
            <ProductCardContent>
                <ProductCardLink to={`products/${kebabCase(product.name)}`}>
                    {product.images && (
                        <img
                            key={getUniqueId('product-card-image')}
                            src={product.images[0]}
                            alt={product.name}
                            width="100"
                        />
                    )}
                    <ProductCardTitle>{product.name}</ProductCardTitle>
                </ProductCardLink>
                <CardButton onClick={createAddToCart(product)}>
                    Add to cart
                </CardButton>
            </ProductCardContent>
        </ProductCard>
    ))
}

export default ProductCards
