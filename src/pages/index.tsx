import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'

import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'

import Button from '../components/Button'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { getUniqueId } from '../utils'

const Section = styled.section`
    padding: 1rem;
`

const HeroSection = styled(Section)`
    padding: 3rem 1rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.primary};
    color: white;
`

const ProductRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 768px) {
        flex-flow: row wrap;
        margin: 0 -1rem;
    }
`

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

const Title = styled.h1``

const Subtitle = styled.h3``

const IndexPage = () => {
    const [products] = useProducts()
    const [, cartActions] = useCart()

    const createAddToCart = product => () => {
        cartActions.addToCart(product, 1)
    }

    const mappedCards = products.map(product => (
        <ProductCard key={getUniqueId('product-card')}>
            <ProductCardContent>
                <ProductCardLink to={kebabCase(product.name)}>
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

    return (
        <Layout>
            <SEO title="Home" />
            <HeroSection>
                <Container>
                    <Title>Store</Title>
                    <Subtitle>A very interesting tagline</Subtitle>
                </Container>
            </HeroSection>
            <Section>
                <Container>
                    <ProductRow>{mappedCards}</ProductRow>
                </Container>
            </Section>
        </Layout>
    )
}

export default IndexPage
