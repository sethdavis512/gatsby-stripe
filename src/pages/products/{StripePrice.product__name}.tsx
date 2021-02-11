import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus,
    faMinus,
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons'

import { Button } from '../../components/styles/CommonStyles'
import { Container } from '../../components/styles/CommonStyles'
import { getProduct, getUniqueId } from '../../utils'
import {
    ProductRow,
    ProductImage,
    ProductDetails,
    CartControls,
    QuantityControls,
    Price,
    Quantity
} from '../../components/styles/DetailPageStyles'
import Layout from '../../components/Layout'
import useCart from '../../hooks/useCart'

interface ProductProps {
    data: any
}

const Product = ({ data }: ProductProps) => {
    const product = getProduct(data)
    const [quantity, setQuantity] = useState(1)
    const createHandleSetQuantity = (isDecrement: boolean) => () =>
        setQuantity(isDecrement ? quantity - 1 : quantity + 1)

    const [, cartActions] = useCart()
    const createHandleAddToCart = (product: any) => () =>
        cartActions.addToCart(product, quantity)

    return (
        <Layout>
            <Container>
                <div><Link to="/">Back to Products</Link></div>
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
                            <Button
                                onClick={createHandleAddToCart(product)}
                                disabled={quantity === 0}
                            >
                                <FontAwesomeIcon icon={faShoppingCart} /> Add to
                                cart
                            </Button>
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
