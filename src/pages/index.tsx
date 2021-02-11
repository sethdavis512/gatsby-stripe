import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
    Container,
    HeroSection,
    HeroSlogan,
    ProductRow,
    Section
} from '../components/styles/CommonStyles'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ProductCards from '../components/ProductCards'
import { getProducts } from '../utils'

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
