import React from 'react'
import Layout from '../components/Layout'
import ProductDetailGrid from '../components/ProductDetailGrid'

const Product = ({ pageContext }) => {
    const { product } = pageContext
    return (
        <Layout>
            <ProductDetailGrid>
                I am a product page {JSON.stringify(product, null, 4)}
            </ProductDetailGrid>
        </Layout>
    )
}

export default Product
