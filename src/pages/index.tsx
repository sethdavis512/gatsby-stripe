import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Container } from '../components/styles/ContainerStyles'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ProductCards from '../components/ProductCards'
import { getProducts } from '../utils'
import bgUrl from '../images/soccer-ball-pattern.jpg'

const Section = styled.section`
    padding: 1rem;
`

const HeroSection = styled(Section)`
    position: relative;
    padding: 3rem 1rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.primary};
    color: white;

    &:before {
        content: "";
        background-image: url(${bgUrl});
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.1;
    }
`

const HeroSlogan = styled.h1`
    position: relative;
    font-size: 2rem;
    margin: 0;
    padding: 0;
`

const ProductRow = styled.div`
    display: flex;
    flex-direction: column;

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
                    <HeroSlogan>
                        Soccer season is here
                        <br />
                        Time to get your gear!
                    </HeroSlogan>
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
