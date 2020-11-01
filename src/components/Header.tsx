import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
    background: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Header = ({ children, siteTitle }) => (
    <StyledHeader>
        <div style={{ paddingLeft: '2rem' }}>
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
        <div>{children}</div>
    </StyledHeader>
)

Header.defaultProps = {
    siteTitle: ``
}

export default Header
