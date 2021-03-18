import React from 'react'
import { useStaticQuery } from 'gatsby'

import {
    Container,
    ProductRow,
    Section
} from '../../components/styles/CommonStyles'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import ProductCards from '../../components/ProductCards'
import useProducts from '../../hooks/useProducts'

const IndexPage = () => {
    const [products] = useProducts()

    return (
        <Layout>
            <SEO title="Shop" />
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
