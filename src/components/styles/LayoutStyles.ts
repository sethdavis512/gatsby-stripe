import styled from 'styled-components';
import { Link } from 'gatsby';

export const SiteWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
    min-height: 100vh;
`

export const SiteContent = styled.div`
    grid-column: 1;
    min-height: 100vh;

    display: grid;
    grid-template-rows: auto 1fr auto;
`

export const SidebarContent = styled.aside`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    border-left: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
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

export const Main = styled.main`
    flex: 1 0 auto;
`

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