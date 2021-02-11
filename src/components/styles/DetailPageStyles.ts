import styled from 'styled-components'

export const ProductRow = styled.div`
    @media (min-width: 768px) {
        display: flex;
        margin: 0 auto;
    }
`

export const ProductImage = styled.div`
    @media (min-width: 768px) {
        flex: 0 0 40%;
    }
`

export const ProductDetails = styled.div`
    padding: 0 1rem 1rem;

    @media (min-width: 768px) {
        flex: 0 0 60%;
    }
`

export const CartControls = styled.div``

export const QuantityControls = styled.div`
    margin-bottom: 1rem;
`

export const Price = styled.h4`
    font-size: 2rem;
    margin: 1rem 0;
`

export const Quantity = styled.span`
    padding: 0 1rem;
    font-weight: bold;
`
