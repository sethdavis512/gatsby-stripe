import React from 'react'
import { Link } from 'gatsby'

import { Container } from '../components/styles/CommonStyles'
import Layout from '../components/Layout'

const AboutPage = () => {
    return (
        <Layout>
            <Container>
                <h1>Who we are</h1>
                <p>
                    Thanks for checking out our site!
                </p>
                <Link to="/">
                    Return to store
                </Link>
            </Container>
        </Layout>
    )
}

export default AboutPage
