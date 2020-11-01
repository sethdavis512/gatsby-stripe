import React from 'react'
import styled from 'styled-components'

const StyledProductCard = styled.div`
    border: 1px solid ${({ theme }) => theme.secondary};
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const ProductCard = ({ children }) => {
    return <StyledProductCard>{children}</StyledProductCard>
}

export default ProductCard
