import React from 'react'

import {
    Container,
    Flex,
    Hero,
    HeroSlogan,
    SecondaryButton,
    Section,
    ProductRow
} from '../components/styles/CommonStyles'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import cleatsAndBall from '../images/cleats-and-ball.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProductCards from '../components/ProductCards'
import useProducts from '../hooks/useProducts'

const IndexPage = () => {
    const [products] = useProducts()
    const abbreviatedProducts = products.slice(0, 2)

    return (
        <Layout>
            <SEO title="Home" />
            <Hero img={cleatsAndBall} height="400px">
                <Section>
                    <Container>
                        <Flex isColumn>
                            <HeroSlogan>Time to get your gear!</HeroSlogan>
                            <SecondaryButton>
                                <span>Shop our products</span>{' '}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </SecondaryButton>
                        </Flex>
                    </Container>
                </Section>
            </Hero>
            <Container>
                <ProductRow>
                    <ProductCards large products={abbreviatedProducts} />
                </ProductRow>
            </Container>
        </Layout>
    )
}

export default IndexPage
