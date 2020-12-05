import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ProductCards from '../components/ProductCards'
import { getProducts } from '../utils'

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

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allStripePrice {
                edges {
                    node {
                        id
                        unit_amount
                        currency
                        product {
                            active
                            name
                            description
                            images
                        }
                    }
                }
            }
        }
    `)
    const products = getProducts(data)

    return (
        <Layout>
            <SEO title="Home" />
            <HeroSection>
                <Container>
                    <h1>Welcome</h1>
                    <h3>Get your soccer gear!</h3>
                </Container>
            </HeroSection>
            <Section>
                <Container>
                    <ProductRow>
                        <ProductCards products={products} />
                    </ProductRow>
                </Container>
            </Section>
        </Layout>
    )
}

export default IndexPage
