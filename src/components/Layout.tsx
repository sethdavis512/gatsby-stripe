import React, { ReactNode } from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'
import Container from './Container'
import Cart from './Cart'
import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import useDarkMode from '../hooks/useDarkMode'
import useSiteMetadata from '../hooks/useSiteMetaData'
import useCart from '../hooks/useCart'

interface LayoutProps {
    children: ReactNode
}

// Outermost element
const SiteWrapper = styled.div`
    display: flex;
    flex-flow: column-reverse nowrap;

    @media (min-width: 970px) {
        flex-direction: row;
    }
`

// Inside Site Wrapper
const MainContent = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
`

const SidebarContent = styled.aside`
    border-left: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`

// Inside Main Content
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

const Main = styled.main`
    flex: 1 0 auto;
`

const Footer = styled.footer`
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
    padding: 4rem 1rem;
`

const SiteTitle = styled.div``

const SiteTitleLink = styled(Link)`
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    :hover {
        text-decoration: none;
    }
`

const Layout = ({ children }: LayoutProps) => {
    const { siteTitle } = useSiteMetadata()

    const [isDarkMode, setDarkMode] = useDarkMode()
    const toggleDarkMode = () => setDarkMode(!isDarkMode)

    const [cart] = useCart()

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <SiteWrapper>
                <MainContent>
                    <Header>
                        <Container>
                            <HeaderContent>
                                <SiteTitle>
                                    <SiteTitleLink to="/">
                                        {siteTitle}
                                    </SiteTitleLink>
                                </SiteTitle>
                                <Button onClick={toggleDarkMode}>
                                    {isDarkMode ? (
                                        <FontAwesomeIcon icon={faSun} />
                                    ) : (
                                        <FontAwesomeIcon icon={faMoon} />
                                    )}
                                </Button>
                            </HeaderContent>
                        </Container>
                    </Header>
                    <Main>
                        {children}
                    </Main>
                    <Footer>
                        <Container>Foooooooter</Container>
                    </Footer>
                </MainContent>
                {cart.hasItems && (
                    <SidebarContent>
                        <Cart />
                    </SidebarContent>
                )}
            </SiteWrapper>
        </ThemeProvider>
    )
}

export default Layout
