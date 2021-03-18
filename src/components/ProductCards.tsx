import React from 'react'
import kebabCase from 'lodash/kebabCase'

import useCart from '../hooks/useCart'
import { getUniqueId } from '../utils'
import {
    ProductCard,
    ProductCardButton,
    ProductCardContent,
    ProductCardLink,
    ProductCardTitle
} from './styles/ProductCardStyes'

const ProductCards = ({ products, large }) => {
    const [, cartActions] = useCart()

    const createAddToCart = product => () => {
        cartActions.addToCart(product, 1)
    }

    return products.map(product => (
        <ProductCard large={large} key={getUniqueId('product-card')}>
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
                <ProductCardButton onClick={createAddToCart(product)}>
                    Add to cart
                </ProductCardButton>
            </ProductCardContent>
        </ProductCard>
    ))
}

export default ProductCards
