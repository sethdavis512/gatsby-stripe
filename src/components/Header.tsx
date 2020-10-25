import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background: ${(({ theme }) => theme.primary)};
    marginBottom: 1.45rem;
`

const Header = ({ children, siteTitle }) => (
    <StyledHeader>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
        {children}
    </StyledHeader>
)

Header.defaultProps = {
    siteTitle: ``
}

export default Header
