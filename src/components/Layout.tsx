import React from 'react'
import { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { HollowButton } from './styles/CommonStyles'
import { Container } from './styles/CommonStyles'
import Cart from './Cart'
import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import useDarkMode from '../hooks/useDarkMode'
import useSiteMetadata from '../hooks/useSiteMetaData'
import useCart from '../hooks/useCart'
import {
    SiteWrapper,
    SiteContent,
    Header,
    HeaderContent,
    Main,
    Footer,
    SidebarContent,
    SiteTitle,
    SiteTitleLink,
    HeaderContentLeft,
    HeaderContentRight,
    HeaderLink
} from './styles/LayoutStyles'

const Layout: React.FC = ({ children }) => {
    const { siteTitle } = useSiteMetadata()

    const [isDarkMode, setDarkMode] = useDarkMode()
    const toggleDarkMode = () => setDarkMode(!isDarkMode)

    const [cart] = useCart();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <SiteWrapper showCart={cart.hasItems}>
                <SiteContent>
                    <Header>
                        <Container>
                            <HeaderContent>
                                <HeaderContentLeft>
                                    <SiteTitle>
                                        <SiteTitleLink to="/">
                                            {siteTitle}
                                        </SiteTitleLink>
                                    </SiteTitle>
                                    <HeaderLink to="/products">
                                        Shop
                                    </HeaderLink>
                                    <HeaderLink to="/about">
                                        About
                                    </HeaderLink>
                                </HeaderContentLeft>
                                <HeaderContentRight>
                                    <HollowButton onClick={toggleDarkMode}>
                                        {isDarkMode ? (
                                            <FontAwesomeIcon icon={faSun} />
                                        ) : (
                                            <FontAwesomeIcon icon={faMoon} />
                                        )}
                                    </HollowButton>
                                </HeaderContentRight>
                            </HeaderContent>
                        </Container>
                    </Header>
                    <Main>{children}</Main>
                    <Footer>
                        <Container>Foooooooter</Container>
                    </Footer>
                </SiteContent>
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
