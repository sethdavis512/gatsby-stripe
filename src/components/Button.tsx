import styled from 'styled-components'

const Button = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.foreground};
    font-size: 16px;
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.primary};

    :hover {
        background-color: ${({ theme }) => theme.secondary};
        border: 2px solid ${({ theme }) => theme.primary};
    }
`

export default Button
