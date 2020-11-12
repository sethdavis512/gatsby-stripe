import React, { useState } from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'
import useCart from '../hooks/useCart'
import { getUniqueId } from '../utils'

const Product = ({ pageContext }) => {
    const { product } = pageContext
    const [quantity, setQuantity] = useState(0)
    const createHandleSetQuantity = isDecrement => () =>
        setQuantity(isDecrement ? quantity - 1 : quantity + 1)

    const [, cartActions] = useCart()
    const createHandleAddToCart = product => () =>
        cartActions.addToCart(product, quantity)

    return (
        <Layout>
            <div>
                {product.images && product.images.length
                    ? product.images.map(url => (
                          <img key={getUniqueId('product-image')} src={url} />
                      ))
                    : 'No images'}
            </div>
            <div>
                <h1>{product.name}</h1>
                {product.description && <p>{product.description}</p>}
                {product.price && (
                    <p>
                        <strong>${product.price / 100}</strong>
                    </p>
                )}
                <Button
                    onClick={createHandleSetQuantity(true)}
                    disabled={quantity === 0}
                >
                    -
                </Button>
                {quantity}
                <Button onClick={createHandleSetQuantity(false)}>+</Button>
                <Button
                    onClick={createHandleAddToCart(product)}
                    disabled={quantity === 0}
                >
                    Add {quantity} Cart
                </Button>
                I am a product page {JSON.stringify(product, null, 4)}
            </div>
        </Layout>
    )
}

export default Product
