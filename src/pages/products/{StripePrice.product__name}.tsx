import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Button from '../../components/Button'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import useCart from '../../hooks/useCart'

import { getUniqueId } from '../../utils'

const ProductRow = styled.div`
    display: flex;
    margin: 0 auto;
`

const ProductImage = styled.div`
    flex: 1 0 auto;
`

const ProductDetails = styled.div`
    flex: 1 0 auto;
`

const CartControls = styled.div``

const QuantityControls = styled.div`
    margin-bottom: 1rem;
`

const Price = styled.h4`
    font-size: 2rem;
    margin: 1rem 0;
`

const Quantity = styled.span`
    padding: 0 1rem;
    font-weight: bold;
`

const AddToCartButton = styled(Button)`
    background-color: ${({ theme }) => theme.tertiary};
    border-color: ${({ theme }) => theme.tertiary};

    :hover {
        background-color: green;
        border-color: green;
    }
`

const Product = ({ data }) => {
    const { product } = data.stripePrice
    const [quantity, setQuantity] = useState(0)
    const createHandleSetQuantity = isDecrement => () =>
        setQuantity(isDecrement ? quantity - 1 : quantity + 1)

    const [, cartActions] = useCart()
    const createHandleAddToCart = product => () =>
        cartActions.addToCart(product, quantity)

    return (
        <Layout>
            <Container>
                <ProductRow>
                    <ProductImage>
                        {product && product.images && product.images.length
                            ? product.images.map(url => (
                                  <img
                                      key={getUniqueId('product-image')}
                                      src={url}
                                      width="100"
                                  />
                              ))
                            : 'No images'}
                    </ProductImage>
                    <ProductDetails>
                        {product && product.name && <h1>{product.name}</h1>}
                        {product && product.description && (
                            <p>{product.description}</p>
                        )}
                        {product && product.price && (
                            <Price>
                                ${product.price / 100}
                            </Price>
                        )}
                        <CartControls>
                        <QuantityControls>
                            <Button
                                onClick={createHandleSetQuantity(true)}
                                disabled={quantity === 0}
                            >
                                -
                            </Button>
                            <Quantity>{quantity}</Quantity>
                            <Button onClick={createHandleSetQuantity(false)}>
                                +
                            </Button>
                        </QuantityControls>
                        <AddToCartButton
                            onClick={createHandleAddToCart(product)}
                            disabled={quantity === 0}
                        >
                            Add {quantity} to cart
                        </AddToCartButton>
                        </CartControls>
                    </ProductDetails>
                </ProductRow>
            </Container>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    stripePrice(id: { eq: $id }) {
      id
      unit_amount
      currency
      product {
        name
        description
        images
      }
    }
  }
`

export default Product
