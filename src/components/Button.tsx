import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.background};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({ theme }) => theme.secondary};
    border-radius: 3px;

    &:hover {
        border: 2px solid ${({ theme }) => theme.background};
    }
`

export default Button
