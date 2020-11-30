import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

import Button from './Button'

import useCart from '../hooks/useCart'
import { getUniqueId } from '../utils'

const ProductCard = styled.div`
    flex: 0 0 48%;
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    margin-left: 1%;
    margin-bottom: 1rem;
    border-radius: 12px;

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
    align-items: center;
    text-align: center;
    padding-bottom: 15px;
`

const ProductCardLink = styled(Link)`
    width: 100%;
    padding: 1rem 1rem 0 1rem;
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
                    <p>{product.name}</p>
                </ProductCardLink>
                <Button onClick={createAddToCart(product)}>Add to cart</Button>
            </ProductCardContent>
        </ProductCard>
    ))
}

export default ProductCards
