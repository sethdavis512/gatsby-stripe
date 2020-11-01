import React from 'react'
import styled from 'styled-components'

const StyledProductCard = styled.div`
    background-color: ${({ theme }) => theme.cardBackground};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: ${({ theme }) => theme.borderRadius}px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const ProductCard = ({ children }) => {
    return <StyledProductCard>{children}</StyledProductCard>
}

export default ProductCard
