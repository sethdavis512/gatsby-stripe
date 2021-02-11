import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './ButtonStyles'

export const ProductCard = styled.div`
    flex: 0 0 48%;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    margin-left: 1%;
    margin-bottom: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};

    :hover {
        background-color: ${({ theme }) => theme.hover};
    }

    @media (min-width: 768px) {
        flex: 0 0 31%;
        margin-left: 1rem;
        margin-bottom: 1rem;
    }
`

export const ProductCardContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`

export const ProductCardLink = styled(Link)`
    width: 100%;
    padding: 1rem 1rem 0 1rem;
`

export const ProductCardTitle = styled.p`
    font-size: 1rem;
    padding: 0;
    margin: 0 0 1rem;
`

export const CardButton = styled(Button)`
    margin: 0 1rem 1rem;
`
