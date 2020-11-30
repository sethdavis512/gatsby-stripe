import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({ theme }) => theme.primary};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.secondary};
    color: white;
    font-size: 16px;
    padding: 0.75rem 1.5rem;

    :hover {
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
