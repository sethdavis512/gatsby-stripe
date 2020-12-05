import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'
import Container from './Container'
import Cart from './Cart'
import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import useDarkMode from '../hooks/useDarkMode'
import useSiteMetadata from '../hooks/useSiteMetaData'

const SiteWrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-flow: column nowrap;
    justify-content: space-between;
`

const Header = styled.header`
    padding: 1rem;
    margin: 0 auto;
    width: 100%;
`

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Wrapper = styled.main`
    flex: 1 0 auto;
`

const Footer = styled.footer`
    color: ${({ theme }) => theme.footerForeground};
    background-color: ${({ theme }) => theme.footerBackground};
    padding: 4rem 1rem;
`

const SiteTitle = styled.h1`
    color: ${({ theme }) => theme.primary};
`

const SiteTitleLink = styled(Link)`
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    :hover {
        text-decoration: none;
    }
`

const CartAndThemeTray = styled.div`
    display: flex;
    justify-content: space-between;
`

const Layout = ({ children }) => {
    const { siteTitle } = useSiteMetadata();

    const [isDarkMode, setDarkMode] = useDarkMode()
    const toggleDarkMode = () => setDarkMode(!isDarkMode)

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <SiteWrapper>
                <Header>
                    <Container>
                        <HeaderContent>
                            <SiteTitle>
                                <SiteTitleLink to="/">{siteTitle}</SiteTitleLink>
                            </SiteTitle>
                            <CartAndThemeTray>
                                <Cart />
                                <Button onClick={toggleDarkMode}>
                                    {isDarkMode ? (
                                        <FontAwesomeIcon icon={faSun} />
                                    ) : (
                                        <FontAwesomeIcon icon={faMoon} />
                                    )}
                                </Button>
                            </CartAndThemeTray>
                        </HeaderContent>
                    </Container>
                </Header>
                <Wrapper>{children}</Wrapper>
                <Footer>
                    <Container>Foooooooter</Container>
                </Footer>
            </SiteWrapper>
        </ThemeProvider>
    )
}

export default Layout
