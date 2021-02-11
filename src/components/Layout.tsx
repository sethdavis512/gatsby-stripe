import React from 'react'
import { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { Button } from './styles/ButtonStyles'
import { Container } from './styles/ContainerStyles'
import Cart from './Cart'
import GlobalStyles, { darkTheme, lightTheme } from './GlobalStyles'
import useDarkMode from '../hooks/useDarkMode'
import useSiteMetadata from '../hooks/useSiteMetaData'
import {
    SiteWrapper,
    SiteContent,
    Header,
    HeaderContent,
    Main,
    Footer,
    SidebarContent,
    SiteTitle,
    SiteTitleLink
} from './styles/LayoutStyles'

const Layout: React.FC = ({ children }) => {
    const { siteTitle } = useSiteMetadata()

    const [isDarkMode, setDarkMode] = useDarkMode()
    const toggleDarkMode = () => setDarkMode(!isDarkMode)

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <SiteWrapper>
                <SiteContent>
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
                    <Main>{children}</Main>
                    <Footer>
                        <Container>Foooooooter</Container>
                    </Footer>
                </SiteContent>
                <SidebarContent>
                    <Cart />
                </SidebarContent>
            </SiteWrapper>
        </ThemeProvider>
    )
}

export default Layout
