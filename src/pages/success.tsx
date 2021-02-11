import React from 'react'
import { Link } from 'gatsby'
import { Container } from '../components/styles/CommonStyles'
import Layout from '../components/Layout'
import useSiteMetadata from '../hooks/useSiteMetaData'

const Success = () => {
    const { siteTitle } = useSiteMetadata();

    return (
        <Layout>
            <Container>
                <h1>Success!</h1>
                <p>
                    Check your email for a receipt.
                </p>
                <p>
                    {`Thanks for shopping with ${siteTitle}`}
                </p>
                <Link to="/">
                    Return to store
                </Link>
            </Container>
        </Layout>
    )
}

export default Success
