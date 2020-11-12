import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Button from './Button'
import Cart from './Cart'
import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import useDarkMode from '../hooks/useDarkMode'

const Container = styled.div`
    max-width: 768px;
    margin: 0 auto;
`

const Header = styled.header`
    background-color: ${({ theme }) => theme.primary};
    padding: 1rem;
    margin: 0 auto;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.tertiary};
`

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
`

const Wrapper = styled.main`
    background-color: ${({ theme }) => theme.background};
`

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.primary};
    padding: 4rem 1rem;
`

const SiteTitle = styled.h1`
    color: white;
`

const SiteTitleLink = styled(Link)`
    text-decoration: none;
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
                            <SiteTitleLink>{title}</SiteTitleLink>
                        </SiteTitle>
                        <div>
                            <Cart />
                            <Button onClick={toggleDarkMode}>
                                {isDarkMode ? '☀️' : '🌛'}
                            </Button>
                        </div>
                    </HeaderContent>
                </Container>
            </Header>
            <Wrapper>
                <Container>{children}</Container>
            </Wrapper>
            <Footer>
                <Container>Foooooooter</Container>
            </Footer>
        </ThemeProvider>
    )
}

export default Layout
