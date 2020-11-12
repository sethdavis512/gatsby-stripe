import styled from 'styled-components'

const Button = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.white};
    font-size: 16px;
    background-color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.slate};

    :hover {
        background-color: ${({ theme }) => theme.secondary};
        border: 2px solid ${({ theme }) => theme.primary};
    }
`

export default Button
