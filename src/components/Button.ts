import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({ theme }) => theme.primary};
    border-radius: 12px;
    border: 2px solid ${({ theme }) => theme.primary};
    color: white;
    font-size: 16px;
    padding: 0.5rem 1rem;

    :hover {
        background-color: ${({ theme }) => theme.secondary};
        border: 2px solid ${({ theme }) => theme.primary};
    }

    :disabled {
        background-color: ${({ theme }) => theme.primary};
        border: 2px solid ${({ theme }) => theme.primary};
    }
`

export default Button
