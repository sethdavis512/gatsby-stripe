import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>404: Not Found</h1>
        <p>Let's get you back on track.</p>
        <Link to="/">Return to Home</Link>
    </Layout>
)

export default NotFoundPage
