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
    color: ${({ theme }) => theme.white};
`

const ProductRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 540px) {
        flex-direction: row;
    }
`

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 0 auto;
    border: 1px solid black;
    margin-bottom: 1rem;
    border-radius: 12px;
    overflow: hidden;

    :not(:last-child) {
        margin-right: 0.75rem;
    }

    :hover {
        background-color: ${({ theme }) => theme.background};
    }

    @media (min-width: 540px) {
        margin-bottom: 0;
    }
`

const ProductCardButton = styled(Button)`
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.foreground};
    background-color: ${({ theme }) => theme.primary};
    border-left: none;
    border-top-color: ${({ theme }) => theme.slate};
    border-top-left-radius: 0;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom: none;

    :hover {
        border-left: none;
        border-right: none;
        border-bottom: none;
    }
`

const ProductCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

const ProductCardLink = styled(Link)`
    padding: 1rem 1rem 0 1rem;
`

const Title = styled.h1`
    color: ${({ theme }) => theme.foreground}
`

const Subtitle = styled.h3`
    color: ${({ theme }) => theme.foreground}
`

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
            </ProductCardContent>
            <ProductCardButton onClick={createAddToCart(product)}>Add to cart</ProductCardButton>
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
