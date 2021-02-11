import styled from 'styled-components'
import { Button } from './ButtonStyles'

export const CartUnorderedList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};
`

export const CartListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding-bottom: 11px;

    :not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.primary};
    }
`

export const CartListItemButton = styled(Button)`
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    margin-right: 4px;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.primary};
`

export const CartListRemoveButton = styled(CartListItemButton)`
    color: ${({ theme }) => theme.red};
    border: 1px solid ${({ theme }) => theme.red};

    :hover {
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.red};
        border-color: ${({ theme }) => theme.red}
    }
`

export const CartQuantityTag = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 100px;
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
    justify-content: center;
`

export const CartQuantityTagInner = styled.div`
    font-size: 0.8rem;
`