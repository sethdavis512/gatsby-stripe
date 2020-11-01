import React from 'react'
import styled from 'styled-components'

const StyledProductDisplayGrid = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-auto-rows: 400px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 960px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const ProductDisplayGrid = ({ children }) => {
    return (
        <StyledProductDisplayGrid>
            {children}
        </StyledProductDisplayGrid>
    )
}

export default ProductDisplayGrid
