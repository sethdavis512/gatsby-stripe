import React from 'react'
import styled from 'styled-components'

const StyledProductGrid = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    padding: 1rem 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 300px;
    }

    @media (min-width: 960px) {}
`

const ProductGrid = ({ children }) => {
    return (
        <StyledProductGrid>
            {children}
        </StyledProductGrid>
    )
}

export default ProductGrid
