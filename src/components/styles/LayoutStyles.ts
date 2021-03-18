import styled from 'styled-components'
import { Link } from 'gatsby'

export const SiteWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr ${props => (props.showCart ? '300px' : '')};
        min-height: 100vh;
    }
`

export const SiteContent = styled.div`
    grid-column: 1;
    min-height: 100vh;

    display: grid;
    grid-template-rows: auto 1fr auto;
`

export const SidebarContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.background};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

    @media (min-width: 768px) {
        position: initial;
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        border-bottom: none;
        border-left: 1px solid ${({ theme }) => theme.border};
    }
`

export const Header = styled.header`
    grid-column: 1 / 2;
    padding: 1rem;
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderContentLeft = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-evenly;

    > * {
        margin-right: 8px;
    }
`

export const HeaderContentRight = styled(HeaderContentLeft)``

export const HeaderLink = styled(Link).attrs({
    activeStyle: { textDecoration: 'underline' }
})`
    padding: 15px;
    border-radius: ${({ theme }) => theme.borderRadius}

    :hover {
        background-color: ${({ theme }) => theme.red}
    }
`

export const Main = styled.main``

export const Footer = styled.footer`
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
    padding: 4rem 1rem;
`

export const SiteTitle = styled.div``

export const SiteTitleLink = styled(Link)`
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    :hover {
        text-decoration: none;
    }
`
