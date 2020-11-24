import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Button from './Button'
import Container from './Container'
import Cart from './Cart'
import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import useDarkMode from '../hooks/useDarkMode'

const Header = styled.header`
    background-color: ${({ theme }) => theme.background};
    padding: 1rem;
    margin: 0 auto;
`

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Wrapper = styled.main`
    background-color: ${({ theme }) => theme.background};
`

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.background};
    padding: 4rem 1rem;
`

const SiteTitle = styled.h1``

const SiteTitleLink = styled(Link)`
    color: ${({ theme }) => theme.links};
    text-decoration: none;
`

const CartAndThemeTray = styled.div`
    display: flex;
    justify-content: space-between;
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [isDarkMode, setDarkMode] = useDarkMode()
    const toggleDarkMode = () => setDarkMode(!isDarkMode)
    const title = data.site.siteMetadata?.title || `Title`

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Header>
                <Container>
                    <HeaderContent>
                        <SiteTitle>
                            <SiteTitleLink to="/">{title}</SiteTitleLink>
                        </SiteTitle>
                        <CartAndThemeTray>
                            <Cart />
                            <Button onClick={toggleDarkMode}>
                                {isDarkMode ? '☀️' : '🌛'}
                            </Button>
                        </CartAndThemeTray>
                    </HeaderContent>
                </Container>
            </Header>
            <Wrapper>
                {children}
            </Wrapper>
            <Footer>
                <Container>Foooooooter</Container>
            </Footer>
        </ThemeProvider>
    )
}

export default Layout