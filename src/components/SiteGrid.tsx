import React from 'react'
import styled from 'styled-components'

const StyledSiteGrid = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 100px 1fr 100px;
    grid-gap: 1rem;
`

const SiteGrid = ({ children }) => {
    return (
        <StyledSiteGrid>
            {children}
        </StyledSiteGrid>
    )
}

export default SiteGrid
