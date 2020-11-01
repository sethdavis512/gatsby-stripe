import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import useDarkMode from '../hooks/useDarkMode'

import Header from './Header'
import Button from './Button'
import Wrapper from './Wrapper'
import Footer from './Footer'
import SiteGrid from './SiteGrid'
import GlobalStyles from './GlobalStyles'
import { darkTheme, lightTheme } from '../themes'

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

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <SiteGrid>
                <Header siteTitle={data.site.siteMetadata?.title || `Title`}>
                    <Button onClick={toggleDarkMode}>
                        Change to {isDarkMode ? 'Light' : 'Dark'} Mode
                    </Button>
                </Header>
                <Wrapper>{children}</Wrapper>
                <Footer>Foooooooter</Footer>
            </SiteGrid>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
