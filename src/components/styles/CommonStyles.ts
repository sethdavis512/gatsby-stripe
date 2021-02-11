import styled from 'styled-components'
import soccerBallPattern from '../../images/soccer-ball-pattern.jpg'

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    color: ${({ theme }) => theme.white};

    :hover {
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.secondary};
        border-color: ${({ theme }) => theme.primary};
    }

    :disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.disabled};
        border-color: ${({ theme }) => theme.secondary};
    }
`

export const Button = styled(StyledButton)`
    font-size: 1rem;
    font-weight: 800;
    padding: 0.75rem 1.5rem;
`

export const Container = styled.div`
    max-width: 768px;
    margin: 0 auto;
`

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => (props.isColumn ? 'column' : 'row')};
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
`

export const Section = styled.section`
    padding: 1rem;
`

// https://coder-coder.com/background-image-opacity/
export const HeroSection = styled(Section)`
    position: relative;
    padding: 3rem 1rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.primary};
    color: white;

    &:before {
        content: '';
        background-image: url(${soccerBallPattern});
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.1;
    }
`

export const HeroSlogan = styled.h1`
    position: relative;
    font-size: 2rem;
    margin: 0;
    padding: 0;
`

export const ProductRow = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-flow: row wrap;
        margin: 0 -1rem;
    }
`
