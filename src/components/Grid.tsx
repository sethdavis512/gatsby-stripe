import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto 250px;
`

const Grid = ({ children }) => {
    return (
        <StyledGrid>
            {children}
        </StyledGrid>
    )
}

export default Grid
