import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({ theme }) => theme.background};
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondary};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;

    &:hover {
        border: 2px solid ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.primary};
    }
`

export default Button
