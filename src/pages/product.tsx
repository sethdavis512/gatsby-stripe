import React from 'react'
import Layout from '../components/Layout'

const Product = ({ pageContext }) => {
    const { product } = pageContext
    return (
        <Layout>
            <div className="">
                I am a product page {JSON.stringify(product, null, 4)}
            </div>
        </Layout>
    )
}

export default Product
