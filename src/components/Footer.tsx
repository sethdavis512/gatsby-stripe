import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.primary};
    padding: 4rem;
`

const Footer = ({ children }) => {
    return <StyledFooter>{children}</StyledFooter>
}

export default Footer
