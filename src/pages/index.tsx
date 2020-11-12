import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'

import Button from '../components/Button'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { getUniqueId } from '../utils'

const Section = styled.section`
    padding: 1rem;
    background-color: ${({ theme }) => theme.background};
`

const ProductRow = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductCard = styled.div`
    flex: 1 0 auto;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 12px;

    :not(:last-child) {
        margin-right: 0.75rem;
    }
`

const ProductCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IndexPage = () => {
    const [products] = useProducts()
    const [cart, cartActions] = useCart()

    const createAddToCart = product => () => {
        cartActions.addToCart(product, 1)
    }

    const mappedCards = products.map(product => (
        <ProductCard key={getUniqueId('product-card')}>
            <ProductCardContent>
                <Link to={kebabCase(product.name)}>
                    {product.images && (
                        <img
                            key={getUniqueId('product-card-image')}
                            src={product.images[0]}
                            alt={product.name}
                            width="100"
                        />
                    )}
                    <div style={{ padding: '1rem 0' }}>{product.name}</div>
                </Link>
                <Button onClick={createAddToCart(product)}>Add to cart</Button>
            </ProductCardContent>
        </ProductCard>
    ))

    return (
        <Layout>
            <SEO title="Home" />
            <Section>
                <h1>Store</h1>
                <h2>A very interesting tagline</h2>
            </Section>
            <Section>
                <ProductRow>{mappedCards}</ProductRow>
            </Section>
        </Layout>
    )
}

export default IndexPage
