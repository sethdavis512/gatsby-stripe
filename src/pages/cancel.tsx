import React from 'react'
import { Link } from 'gatsby'

import { Container } from '../components/styles/ContainerStyles'
import Layout from '../components/Layout'

const Cancel = () => {
    return (
        <Layout>
            <Container>
                <h1>Cancelled.</h1>
                <p>
                    You have not been charged.
                </p>
                <Link to="/">
                    Return to store
                </Link>
            </Container>
        </Layout>
    )
}

export default Cancel
