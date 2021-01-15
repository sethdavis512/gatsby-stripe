import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import Button from '../../components/Button'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import useCart from '../../hooks/useCart'

import { getProduct, getUniqueId } from '../../utils'

interface ProductProps {
    data: any
}

const ProductRow = styled.div`
    @media (min-width: 768px) {
        display: flex;
        margin: 0 auto;
    }
`

const ProductImage = styled.div`
    @media (min-width: 768px) {
        flex: 0 0 40%;
    }
`

const ProductDetails = styled.div`
    padding: 0 1rem 1rem;

    @media (min-width: 768px) {
        flex: 0 0 60%;
    }
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

const Product = ({ data }: ProductProps) => {
    const product = getProduct(data)
    const [quantity, setQuantity] = useState(0)
    const createHandleSetQuantity = (isDecrement: boolean) => () =>
        setQuantity(isDecrement ? quantity - 1 : quantity + 1)

    const [, cartActions] = useCart()
    const createHandleAddToCart = (product: any) => () =>
        cartActions.addToCart(product, quantity)

    return (
        <Layout>
            <Container>
                <ProductRow>
                    <ProductImage>
                        {product && product.images && product.images.length
                            ? product.images.map((url: string) => (
                                  <img
                                      key={getUniqueId('product-image')}
                                      src={url}
                                  />
                              ))
                            : 'No images'}
                    </ProductImage>
                    <ProductDetails>
                        {product && (
                            <>
                                {product.name && <h1>{product.name}</h1>}
                                {product.description && (
                                    <p>{product.description}</p>
                                )}
                                {product.price && (
                                    <Price>${product.price / 100}</Price>
                                )}
                            </>
                        )}
                        <CartControls>
                            <QuantityControls>
                                <Button
                                    onClick={createHandleSetQuantity(true)}
                                    disabled={quantity === 0}
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </Button>
                                <Quantity>{quantity}</Quantity>
                                <Button
                                    onClick={createHandleSetQuantity(false)}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
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

// Page query required since we need to pass a variable
// https://www.gatsbyjs.com/docs/static-query/#how-staticquery-differs-from-page-query
export const query = graphql`
    query($id: String) {
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
