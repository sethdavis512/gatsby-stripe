import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({ theme }) => theme.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
    font-weight: 800;
    padding: 0.75rem 1.5rem;

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

export default Button
