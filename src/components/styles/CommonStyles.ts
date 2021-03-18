import styled from 'styled-components'

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
    padding: 0.75rem 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > :not(:last-child) {
        margin-right: 8px;
    }
`

export const SecondaryButton = styled(Button)`
    background-color: ${({ theme }) => theme.secondary};
`

export const HollowButton = styled(Button)`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};

    :hover {
        background-color: ${({ theme }) => theme.background};
        border-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.primary};
    }
`

export const Container = styled.div`
    max-width: 768px;
    margin: 0 auto;
`

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => (props.isColumn ? 'column' : 'row')};
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
`

export const Section = styled.section`
    padding: 1rem;
`

// https://coder-coder.com/background-image-opacity/
export const Hero = styled(Section)`
    padding: 3rem 1rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    height: ${props => props.height};
    background-image: url(${props => props.img});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
`

export const HeroSlogan = styled.h1`
    /* Must be relative otherwise image will overlap */
    position: relative;
    font-size: 2rem;
    margin: 0 0 1rem 0;
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
